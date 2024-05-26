import Project from "@/app/models/Project";
import connect from "@/app/utils/db";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  connect();

  const { id } = req.query

  try {
    const project = await Project.findById(id).exec();
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
    console.log(err);
    res.status(500).json(err);
  }
}
