import { decrypt, getSession } from "@/app/actions/session";
import Project from "@/app/models/Project";
import connect from "@/app/utils/db";
import path from "path";

import { writeFile } from "fs/promises";
import type { NextApiRequest, NextApiResponse } from "next";
import { cookies } from "next/headers";
import { z } from "zod";
import FloorPlan from "@/app/models/FloorPlan";
import formidable, {
  IncomingForm,
  Fields,
  Files,
  Formidable,
} from "formidable";
import multer from "multer";
import { request } from "http";
import fs from "fs";
import { revalidatePath } from "next/cache";
import util from 'node:util';
import os from 'node:os';

const schema = z.object({
  id: z.string(),
  space_name: z.string().trim(),
  has_floor_plan: z.boolean(),
  has_address: z.boolean(),
  approximate_size: z.number(),
  rentable_area: z.number(),
  is_base_on_head_count: z.string(),
  target_head_count: z.string(),
  average_attendance: z.string(),
  assigned_seat: z.string(),
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  connect();

  switch (req.method) {
    case "POST":
      var form = formidable({ uploadDir: __dirname });
      // const file = form.get("file") as Blob | null;
      // const [fields, files] = await form.parse(req);
      const files: any[] = [];
      const fields: { fieldName: string; value: string }[] = [];

      form
        .on("field", (fieldName, value) => {
          console.log(fieldName, value);
          fields.push({ fieldName, value });
        })
        .on("file", async (fieldName, file) => {
          console.log(fieldName, file);
          files.push({ fieldName, file });
          // const imageBuffer = Buffer.from(await file.arrayBuffer())
        })
        .on("end", () => {
          console.log("-> upload done");
          res.writeHead(200, { "Content-Type": "text/plain" });
          res.write(`received fields:\n\n${util.inspect(fields)}`);
          res.write("\n\n");
          res.end(`received files:\n\n${util.inspect(files)}`);
        });

      const data = form.parse(req);
      // console.log(data);

      // const {
      //   spaceName,
      //   floorPlans,
      //   hasFloorPlan,
      //   address,
      //   hasAddress,
      //   approximateSize,
      //   rentableArea,
      //   targetHeadCount,
      //   averageAttendance,
      //   assignedSeat,
      // } = req.body;

      // const session = await decrypt(req.cookies.session);
      // try {
      //   const project = new Project({
      //     spaceName: spaceName,
      //     address: hasAddress ? address : null,
      //     spaceSize: approximateSize,
      //     rentableArea: rentableArea,
      //     headCount: targetHeadCount,
      //     averageOfficeAttendance: averageAttendance,
      //     seatingPercentage: assignedSeat,
      //     user: session?.userId,
      //   });

      //   let data = await project.save();

      //   if (!hasFloorPlan) {

      //     floorPlans.map(async (file: File) => {
      //       //
      //       // Convert the file data to a Buffer
      //       const buffer = Buffer.from(await file.arrayBuffer());

      //       // Replace spaces in the file name with underscores
      //       const filename = file.name.replaceAll(" ", "_");
      //       console.log(filename);

      //       const filePath = path.join(process.cwd(), "public/assets/" + filename);
      //       // Write the file to the specified directory (public/assets) with the modified filename
      //       await writeFile(
      //         filePath,
      //         buffer
      //       );

      //       const floorPlan = new FloorPlan({
      //         filename: file.name,
      //         type: file.type,
      //         size: file.size,
      //         path: filePath,
      //         project: data._id
      //       });

      //       let floorplan = await floorPlan.save();
      //     })
      //   }

      //   res.status(200).json({ id: data._id });
      // } catch (err) {
      //   console.log(err);
      //   res.status(500).json(err);
      // }
      break;

    default:
      try {
        const projects = await Project.find({}).exec();

        res.status(200).json({ projects });
      } catch (err) {
        res.status(500).json({ error: "failed to load data" });
      }
      break;
  }
}
