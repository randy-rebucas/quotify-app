import Refinement from "@/app/models/Refinement";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { rid } = req.query;

  try {
    const refinement = await Refinement.findById(rid).exec();
    res.status(200).json(refinement);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}
