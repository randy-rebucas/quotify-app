import EstimateRequirement from "@/app/models/EstimateRequirement";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { eid } = req.query;

  try {
    const requirement = await EstimateRequirement.find({
      estimate: eid,
    })
      .populate("requirement")
      .populate("requirementLevel")
      .exec();

    res.status(200).json(requirement);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}
