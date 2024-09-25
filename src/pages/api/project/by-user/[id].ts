import Project from "@/models/Project";
import connect from "@/utils/db";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  connect();

  try {
    const projects = await Project.find({ user: id }).exec();

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
        isCompleted: project.isCompleted,
        lastUri: project.lastUri,
      };
    });

    res.status(200).json(transformData);
  } catch (err) {
    res.status(500).json(err);
  }
}
