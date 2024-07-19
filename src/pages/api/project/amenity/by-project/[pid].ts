import ProjectAmenity, { IProjectAmenity } from "@/app/models/ProjectAmenity";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { pid } = req.query;

  try {
    const projectAmenities = await ProjectAmenity.find({
      project: pid
    })
      .populate("amenity")
      .exec();
    const transformedData = projectAmenities.map((projectAmenity: any) => {
        return {
            projectAmenityId: projectAmenity._id.toString(),
            amenityId: projectAmenity.amenity._id.toString(),
            amenityName: projectAmenity.amenity.amenityName
        }
    });

    res.status(200).json(transformedData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}
