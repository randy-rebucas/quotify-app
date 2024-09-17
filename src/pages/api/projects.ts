import type { NextApiRequest, NextApiResponse } from "next";

import Project from "@/models/Project";
import connect from "@/utils/db";
import path from "path";
import FloorPlan from "@/models/FloorPlan";
import formidable, { File } from "formidable";
import fs from "fs";
import https from "https";
import { decrypt } from "@/actions/session";

export const config = {
  api: {
    bodyParser: false,
  },
};

type ResponseData = {
  id: string;
};

type FileProps = {
  fieldName: string;
  file: File;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  connect();
  if (req.method === "POST") {
    const files: FileProps[] = [];
    const fields: { fieldName: string; value: string }[] = [];

    const form = formidable({
      uploadDir: __dirname,
      multiples: true,
      keepExtensions: true,
    });
    form.once("error", console.error);
    form
      .on("fileBegin", (name, file) => {})
      .on("field", (fieldName, value) => {
        fields.push({ fieldName, value });
      })
      .on("file", async (fieldName, file) => {
        files.push({ fieldName, file });
      })
      .on("end", async () => {});

    await form.parse(req);

    const session = await decrypt(req.cookies.session);

    const fieldMap = new Map();
    fields.map((element: { fieldName: string; value: string }) => {
      return fieldMap.set(element.fieldName, element.value);
    });
    const project = new Project({
      spaceName: fieldMap.get("spaceName"),
      address: fieldMap.get("address"),
      spaceSize: fieldMap.get("approximateSize"),
      rentableArea: fieldMap.get("rentableArea"),
      headCount: fieldMap.get("targetHeadCount"),
      averageOfficeAttendance: fieldMap.get("averageAttendance"),
      seatingPercentage: fieldMap.get("assignedSeat"),
      lastUri: "area-breakdown",
      user: session?.userId,
    });

    let projectResponse = await project.save();

    const hasFloorPlan = fieldMap.get("hasFloorPlan") === "yes" ? true : false;

    if (!hasFloorPlan) {
      files.map(async (element: FileProps) => {
        const { fieldName, file } = element;

        const REGION = process.env.BUNNYCDN_REGION; // If German region, set this to an empty string: ''
        const BASE_HOSTNAME = process.env.BUNNYCDN_BASE_HOSTNAME;
        const HOSTNAME = REGION ? `${REGION}.${BASE_HOSTNAME}` : BASE_HOSTNAME;
        const STORAGE_ZONE_NAME = process.env.BUNNYCDN_STORAGE_ZONE;

        const readStream = fs.createReadStream(file.filepath);

        const options = {
          method: "PUT",
          host: HOSTNAME,
          path: `/${STORAGE_ZONE_NAME}/${file.newFilename}`,
          headers: {
            AccessKey: process.env.BUNNYCDN_API_KEY,
            "Content-Type": "application/octet-stream",
          },
        };

        const req = https.request(options, (res) => {
          res.on("data", (chunk) => {
            console.log(chunk.toString("utf8"));
          });
        });

        req.on("error", (error) => {
          console.error(error);
        });

        readStream.pipe(req);

        const floorPlan = new FloorPlan({
          filename: file.newFilename,
          type: file.mimetype,
          size: file.size,
          path: `https://${process.env.BUNNYCDN_HOSTNAME}/${file.newFilename}`,
          project: projectResponse._id,
        });
  
        await floorPlan.save();
      });

    }
    res.status(200).json({ id: projectResponse._id });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
