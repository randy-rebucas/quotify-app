import RequirementLevel from "@/app/models/RequirementLevel";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { rid } = req.query;

  try {
    const requirementLevel = await RequirementLevel.findById(rid)
      .populate("image")
      .exec();

    res.status(200).json(requirementLevel);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}
