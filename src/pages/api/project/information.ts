import Project from "@/models/Project";
import connect from "@/utils/db";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  connect();

  const { projectId } = req.body;

  try {
    const update = { lastUri: "requirement" };

    const filterProject = { _id: projectId };

    await Project.findOneAndUpdate(filterProject, update);

    //
    res.status(200).json({ id: projectId });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}
