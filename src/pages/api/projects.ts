import type { NextApiRequest, NextApiResponse } from "next";
import { decrypt } from "@/app/actions/session";
import Project from "@/models/Project";
import connect from "@/utils/db";
import path from "path";
import FloorPlan from "@/models/FloorPlan";
import formidable, { File } from "formidable";
import fs from "fs";

export const config = {
  api: {
    bodyParser: false,
  },
};

type FileProps = {
  fieldName: string;
  file: File;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  connect();

  switch (req.method) {
    case "POST":
      const files: FileProps[] = [];
      const fields: { fieldName: string; value: string }[] = [];

      const form = formidable({
        uploadDir: __dirname,
        multiples: true,
        keepExtensions: true,
      });
      form.once("error", console.error);
      form
        .on("fileBegin", (name, file) => {
          console.log("start uploading: ", file.originalFilename);
        })
        .on("field", (fieldName, value) => {
          fields.push({ fieldName, value });
        })
        .on("file", async (fieldName, file) => {
          files.push({ fieldName, file });
        })
        .on("end", async () => {
          console.log("-> upload done");
        });

      await form.parse(req);

      const session = await decrypt(req.cookies.session);

      const fieldMap = new Map();
      fields.map((element: { fieldName: string; value: string }) => {
        console.log(element.fieldName, element.value);
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

      const hasFloorPlan =
        fieldMap.get("hasFloorPlan") === "true" ? true : false;

      if (!hasFloorPlan) {
        files.map(async (element: FileProps) => {
          const { fieldName, file } = element;
          const oldPath = file.filepath;
          const newPath = path.join(
            process.cwd(),
            "public/uploads",
            `${Date.now()}${file.originalFilename?.substring(
              file.originalFilename?.lastIndexOf(".")
            )}`
          );
          fs.renameSync(oldPath, newPath);

          const floorPlan = new FloorPlan({
            filename: file.originalFilename,
            type: file.mimetype,
            size: file.size,
            path: newPath,
            project: projectResponse._id,
          });

          await floorPlan.save();
        });
      }

      try {
        res.status(200).json({ id: projectResponse._id });
      } catch (e) {
        console.error("Error while trying to upload a file\n", e);
        res.status(500).json(e);
      }

      break;
    case "GET":
      try {
        const projects = await Project.find({}).exec();
        const transformData = projects.map((project) => {
          return {
            _id: project._id.toString(),
            spaceName: project.spaceName,
            floorPlan: project.floorPlan,
            address: project.address,
            spaceSize: project.spaceSize.toString(),
            rentableArea: project.rentableArea.toString(),
            headCount: project.headCount,
            averageOfficeAttendance: project.averageOfficeAttendance,
            seatingPercentage: project.seatingPercentage.toString(),
          };
        });

        res.status(200).json({ transformData });
      } catch (err) {
        res.status(500).json(err);
      }
      break;
    default:
      break;
  }
}
