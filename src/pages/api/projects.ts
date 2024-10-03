import type { NextApiRequest, NextApiResponse } from "next";

import Project from "@/models/Project";
import connect from "@/utils/db";
import path from "path";
import FloorPlan from "@/models/FloorPlan";
import formidable, { File } from "formidable";
import fs from "fs";
import https from "https";
import { decrypt } from "@/actions/session";
import { upload } from "@/lib/bunny";

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

  if (!hasFloorPlan && files.length != 0) {
    files.map(async (element: FileProps) => {
      const { fieldName, file } = element;

      const bunny_preview_url = upload(
        file.filepath,
        file.newFilename,
        "floorplans"
      );

      const floorPlan = new FloorPlan({
        filename: file.newFilename,
        type: file.mimetype,
        size: file.size,
        path: bunny_preview_url,
        project: projectResponse._id,
      });

      await floorPlan.save();
    });
  }
  res.status(200).json({ id: projectResponse._id });
}
