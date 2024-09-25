import EstimateCustomSpaceRefinementLevel from "@/models/EstimateCustomSpaceRefinementLevel";
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
  const { eid } = req.query;
  const { estimateId, refinementId } = req.body;
  connect();

  try {
    const estimateProjectCustomSpace =
      await EstimateCustomSpaceRefinementLevel.find({
        estimate: eid,
      })
        .populate("refinementLevel")
        .populate({
          path: "projectCustomSpace",
          populate: {
            path: "customSpace",
          },
        })
        .exec();

    res.status(200).json(estimateProjectCustomSpace);
  } catch (err) {
    res.status(500).json(err);
  }
}
