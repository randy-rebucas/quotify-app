import ProjectAmenity from "@/app/models/ProjectAmenity";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  try {
    const projectAmenities = await ProjectAmenity.findById(id)
      .populate("project")
      .exec();

    res.status(200).json(projectAmenities);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}