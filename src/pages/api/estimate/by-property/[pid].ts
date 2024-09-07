import Estimate from "@/models/Estimate";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { pid } = req.query;

  try {
    const estimate = await Estimate.find({
      project: pid
    })
      .populate("project")
      .exec();

    res.status(200).json(estimate);
  } catch (err) {
    res.status(500).json(err);
  }
}
