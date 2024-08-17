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
  const { eid } = req.query;

  try {
    const estimateProjectAmenity = await EstimateAmenityRefinementLevel.find(
      {
        estimate: eid,
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
