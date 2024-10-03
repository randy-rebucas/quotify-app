import EstimateRequirement from "@/models/EstimateRequirement";
import connect from "@/utils/db";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  connect();

  const { rid } = req.query;
  const { estimateId } = req.body;

  try {
    const estimateRequirement = await EstimateRequirement.findOne({
      requirement: rid,
      estimate: estimateId,
    })
      .populate("requirement")
      .populate("requirementLevel")
      .exec();

    res.status(200).json(estimateRequirement);
  } catch (err) {
    res.status(500).json(err);
  }
}
