import Estimate from "@/models/Estimate";
import connect from "@/utils/db";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  connect();
  if (req.method === "GET") {
    const { id } = req.query;

    try {
      const project = await Estimate.findById(id).exec();
      const transformData = {
        _id: project._id.toString(),
        name: project.name,
        project: project.project,
      };
      res.status(200).json(transformData);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
