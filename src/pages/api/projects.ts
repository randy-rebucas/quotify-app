import { decrypt, getSession } from "@/app/actions/session";
import Project from "@/app/models/Project";
import connect from "@/app/utils/db";
import type { NextApiRequest, NextApiResponse } from "next";
import { cookies } from "next/headers";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "500kb",
    },
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  connect();

  switch (req.method) {
    case "POST":
      const {
        spaceName,
        // floorPlan,
        // hasFloorPlan,
        // address,
        // hasAddress,
        approximateSize,
        rentableArea,
        targetHeadCount,
        averageAttendance,
        assignedSeat,
      } = req.body;

      const session = await decrypt(req.cookies.session);
      try {
        const project = new Project({
          spaceName: spaceName,
          // floorPlan: floorPlan,
          // address: hasAddress ? address : null,
          spaceSize: approximateSize,
          rentableArea: rentableArea,
          headCount: targetHeadCount,
          averageOfficeAttendance: averageAttendance,
          seatingPercentage: assignedSeat,
          user: session?.userId,
        });

        let data = await project.save();

        res.status(200).json({ id: data._id });
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
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
