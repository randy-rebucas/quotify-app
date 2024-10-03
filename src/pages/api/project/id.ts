import Project from "@/models/Project";
import connect from "@/utils/db";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  connect();
  if (req.method === "GET") {
    const { ids } = req.query;

    try {
      const project = await Project.findById(ids).exec();
      const transformData = {
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
      res.status(200).json(transformData);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
