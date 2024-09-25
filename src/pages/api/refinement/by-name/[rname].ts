import Refinement from "@/models/Refinement";
import connect from "@/utils/db";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { rname } = req.query;
  connect();

  try {
    const refinement = await Refinement.findOne({ name: rname }).exec();
    res.status(200).json(refinement);
  } catch (err) {
    res.status(500).json(err);
  }
}
