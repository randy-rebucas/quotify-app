import EstimateRequirement from "@/models/EstimateRequirement";
import connect from "@/utils/db";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  connect();
  if (req.method === "GET") {
    const { eid } = req.query;

    try {
      const requirement = await EstimateRequirement.find({
        estimate: eid,
      })
        .populate("requirement")
        .populate("requirementLevel")
        .exec();

      res.status(200).json(requirement);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
