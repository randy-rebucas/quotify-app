import EstimateAmenityRefinementLevel from "@/models/EstimateAmenityRefinementLevel";
import connect from "@/utils/db";
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
  if (req.method === "POST") {
    const { aid } = req.query;
    const { estimateId, refinementId } = req.body;
    connect();

    try {
      const estimateProjectAmenity =
        await EstimateAmenityRefinementLevel.findOne({
          projectAmenity: aid,
          estimate: estimateId,
          refinement: refinementId,
        })
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
      res.status(500).json(err);
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
