import RefinementLevel from "@/models/RefinementLevel";
import connect from "@/utils/db";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  connect();
  if (req.method === "GET") {
    const { rid } = req.query;

    try {
      const refinementLevel = await RefinementLevel.findById(rid)
        .populate("image")
        .exec();

      res.status(200).json(refinementLevel);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
