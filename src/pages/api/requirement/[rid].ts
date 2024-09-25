import Requirement from "@/models/Requirement";
import connect from "@/utils/db";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { rid } = req.query;
  connect();

  try {
    const requirement = await Requirement.findById(rid).exec();
    res.status(200).json(requirement);
  } catch (err) {
    res.status(500).json(err);
  }
}
