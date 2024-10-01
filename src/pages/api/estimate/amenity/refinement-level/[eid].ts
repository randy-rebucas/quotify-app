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
  connect();
  if (req.method === "GET") {
    const { eid } = req.query;

    try {
      const estimateProjectAmenity = await EstimateAmenityRefinementLevel.find({
        estimate: eid,
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
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
