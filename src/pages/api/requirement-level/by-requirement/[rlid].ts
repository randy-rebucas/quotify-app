import RequirementLevel from "@/models/RequirementLevel";
import connect from "@/utils/db";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  connect();
  if (req.method === "GET") {
    const { rlid } = req.query;

    try {
      const requirementLevel = await RequirementLevel.find({
        requirement: rlid,
      })
        .populate("image")
        .exec();

      res.status(200).json(requirementLevel);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
