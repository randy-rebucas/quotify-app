import Estimate from "@/app/models/Estimate";
import EstimateRequirement from "@/app/models/EstimateRequirement";
import Project from "@/app/models/Project";
import { StimateData } from "@/app/ui/estimation/requirement/form";

import connect from "@/app/utils/db";

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

      item.requirement.map(async (requirement: { requirementLevelId: string }) => {
        const data = new EstimateRequirement({
          estimate: estimateId,
          requirementLevel: requirement.requirementLevelId,
        });
        await data.save();
      });
    });

    const update = { lastUri: "refinement" };

    const filterProject = { _id: projectId };

    await Project.findOneAndUpdate(filterProject, update);

    res.status(200).json({ id: projectId });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}
