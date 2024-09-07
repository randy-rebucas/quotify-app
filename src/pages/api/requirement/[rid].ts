import Requirement from "@/models/Requirement";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { rid } = req.query;

  try {
    const requirement = await Requirement.findById(rid).exec();
    res.status(200).json(requirement);
  } catch (err) {
    res.status(500).json(err);
  }
}
