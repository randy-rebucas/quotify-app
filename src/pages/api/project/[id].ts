import Project from "@/models/Project";
import connect from "@/utils/db";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  connect();
  const { id } = req.query;

  if (req.method === "GET") {
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
      res.status(500).json(err);
    }
  } else if (req.method === "POST") {
    const {
      approximateSize,
      rentableArea,
      targetHeadcount,
      seatingPercentage,
    } = JSON.parse(req.body);

    const update = {
      spaceSize: approximateSize,
      rentableArea: rentableArea,
      headCount: targetHeadcount,
      seatingPercentage: seatingPercentage,
    };

    await Project.findOneAndUpdate({ _id: id }, update);

    res.status(200).json({ message: "update" });
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
