import EstimateCustomSpaceRefinementLevel from "@/models/EstimateCustomSpaceRefinementLevel";
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
    console.log(err);
    res.status(500).json(err);
  }
}
