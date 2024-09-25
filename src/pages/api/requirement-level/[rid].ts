import RequirementLevel from "@/models/RequirementLevel";
import connect from "@/utils/db";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { rid } = req.query;
  connect();

  try {
    const requirementLevel = await RequirementLevel.findById(rid)
      .populate("image")
      .exec();

    res.status(200).json(requirementLevel);
  } catch (err) {
    res.status(500).json(err);
  }
}
