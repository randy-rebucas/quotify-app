import Estimate from "@/models/Estimate";
import connect from "@/utils/db";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  connect();
  if (req.method === "GET") {
    const { pid } = req.query;
    try {
      const estimate = await Estimate.find({
        project: pid,
      })
        .populate("project")
        .exec();

      res.status(200).json(estimate);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
