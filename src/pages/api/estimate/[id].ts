import Estimate from "@/app/models/Estimate";
import connect from "@/app/utils/db";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  connect();

  const { id } = req.query

  try {
    const project = await Estimate.findById(id).exec();
    const transformData = {
      _id: project._id.toString(),
      name: project.name,
      project: project.project
    };
    res.status(200).json(transformData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}
