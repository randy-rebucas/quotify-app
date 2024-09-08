import { StimateData } from "@/components/estimation/requirement/entities";
import Estimate from "@/models/Estimate";
import EstimateRequirement from "@/models/EstimateRequirement";
import Project from "@/models/Project";


import connect from "@/utils/db";

import type { NextApiRequest, NextApiResponse } from "next";

export const config = {
  api: {
    bodyParser: true,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  connect();

  const { estimates, projectId, section } = req.body;

  try {
    estimates.map(async (item: StimateData) => {
      const estimate = new Estimate({
        name: item.name,
        section: section,
        project: projectId,
      });

      let estimateId = await estimate.save();

      item.requirement.map(async (requirement: {requirementId: string, requirementLevelId: string }) => {
        const data = new EstimateRequirement({
          requirement: requirement.requirementId,
          requirementLevel: requirement.requirementLevelId,
          estimate: estimateId,
        });
        await data.save();
      });
    });

    const update = { lastUri: "refinement" };

    const filterProject = { _id: projectId };

    await Project.findOneAndUpdate(filterProject, update);

    res.status(200).json({ id: projectId });
  } catch (err) {
    res.status(500).json(err);
  }
}
