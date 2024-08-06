import EstimateRequirement from "@/app/models/EstimateRequirement";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { rid } = req.query;

  try {
    const estimateRequirement = await EstimateRequirement.findOne({
      requirement: rid,
    })
      .populate("requirement")
      .populate("requirementLevel")
      .exec();

    res.status(200).json(estimateRequirement);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}
