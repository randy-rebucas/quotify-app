import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { projectId } = req.query;
  res.end(`Project Id: ${projectId}`);
}
