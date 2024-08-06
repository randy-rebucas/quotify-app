import EstimateAmenityRefinementLevel from "@/app/models/EstimateAmenityRefinementLevel";
import type { NextApiRequest, NextApiResponse } from "next";

export const config = {
    api: {
      bodyParser: true,
    },
};
  
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { aid } = req.query;
  const { estimateId } = req.body;
  try {
    const estimateProjectAmenity = await EstimateAmenityRefinementLevel.findOne(
      {
        projectAmenity: aid,
        estimate: estimateId,
      }
    )
      .populate("refinementLevel")
      .populate({
        path: "projectAmenity",
        populate: {
          path: "amenity",
          populate: { path: "category", select: "_id name" },
        },
      })
      .exec();

    res.status(200).json(estimateProjectAmenity);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}
