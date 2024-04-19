import Project from "@/app/models/Project";
import connect from "@/app/utils/db";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  connect();

  try {
    switch (req.method) {
      case "POST":
        // const { name, message } = req.body
        // Process a POST request
        break;

      default:
        const projects = await Project.find({}).exec();

        res.status(200).json({ projects });
        break;
    }
  } catch (err) {
    res.status(500).json({ error: "failed to load data" });
  }
}
