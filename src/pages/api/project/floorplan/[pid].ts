import FloorPlan from "@/models/FloorPlan";
import ProjectCustomSpace from "@/models/ProjectCustomSpace";
import connect from "@/utils/db";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  connect();

  const { pid } = req.query;

  try {
    const floorplan = await FloorPlan.findOne({ project: pid }).exec();

    const transformData = {
      _id: floorplan._id.toString(), // project amenity id
      path: floorplan.path,
    };

    res.status(200).json(transformData);
  } catch (err) {
    res.status(500).json(err);
  }
}
