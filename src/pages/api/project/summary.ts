import Project from "@/models/Project";
import connect from "@/utils/db";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  connect();
  if (req.method === "POST") {
    const { projectId } = req.body;

    try {
      const update = { lastUri: null, isCompleted: true };

      const filterProject = { _id: projectId };

      await Project.findOneAndUpdate(filterProject, update);

      //
      res.status(200).json({ id: projectId });
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
