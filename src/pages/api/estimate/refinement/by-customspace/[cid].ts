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
  const { cid } = req.query;
  const { estimateId, refinementId } = req.body;
  connect();

  try {
    const estimateProjectCustomSpace = await EstimateCustomSpaceRefinementLevel.findOne({
      projectCustomSpace: cid,
      estimate: estimateId,
      refinement: refinementId,
    })
      .populate("refinementLevel")
      .populate({
        path: "projectCustomSpace",
        populate: {
          path: "customSpace"
        },
      })
      .exec();

    res.status(200).json(estimateProjectCustomSpace);
  } catch (err) {
    res.status(500).json(err);
  }
}
