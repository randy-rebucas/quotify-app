import Requirement from "@/models/Requirement";
import connect from "@/utils/db";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { rname } = req.query;
  connect();

  try {
    const requirement = await Requirement.findOne({ name: rname }).exec();
    res.status(200).json(requirement);
  } catch (err) {
    res.status(500).json(err);
  }
}
