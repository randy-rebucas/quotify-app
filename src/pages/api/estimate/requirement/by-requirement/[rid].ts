import EstimateRequirement from "@/models/EstimateRequirement";
import connect from "@/utils/db";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { rid } = req.query;
    const { estimateId } = req.body;
    connect();

    try {
      const estimateRequirement = await EstimateRequirement.findOne({
        requirement: rid,
        estimate: estimateId,
      })
        .populate("requirement")
        .populate("requirementLevel")
        .exec();

      res.status(200).json(estimateRequirement);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
