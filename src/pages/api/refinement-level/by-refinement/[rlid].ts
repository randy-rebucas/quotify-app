import RefinementLevel from "@/models/RefinementLevel";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { rlid } = req.query;
 
  try {
    const refinementLevel = await RefinementLevel.find({ refinement: rlid })
      .populate("image")
      .exec();

    res.status(200).json(refinementLevel);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}
