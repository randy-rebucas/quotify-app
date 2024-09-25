import RefinementLevel from "@/models/RefinementLevel";
import connect from "@/utils/db";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { rlid } = req.query;
  connect();

  try {
    const refinementLevel = await RefinementLevel.find({ refinement: rlid })
      .populate("image")
      .exec();

    res.status(200).json(refinementLevel);
  } catch (err) {
    res.status(500).json(err);
  }
}
