import Project from "@/models/Project";
import ProjectAmenity from "@/models/ProjectAmenity";
import connect from "@/utils/db";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  connect();

  const { pid } = req.query;

  try {
    const project_amenities = await ProjectAmenity.find({ project: pid })
      .populate("amenity")
      .exec();

    const transformData = project_amenities.map((project_amenity) => {
      return {
        _id: project_amenity._id.toString(),                                            // project amenity id
        name: project_amenity.amenity.amenityName,                               // amenity name
        type: 'amenity'
      };
    });

    res.status(200).json(transformData);
  } catch (err) {
    res.status(500).json(err);
  }
}
