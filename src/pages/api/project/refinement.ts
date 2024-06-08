import Estimate from "@/app/models/Estimate";
import { StimateData } from "@/app/ui/estimation/refinement/entities";
import connect from "@/app/utils/db";

import type { NextApiRequest, NextApiResponse } from "next";
import EstimateRefinement from "@/app/models/EstimateRefinement";
import Project from "@/app/models/Project";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  connect();

  const { stimates, projectId, section } = req.body;

  try {
    stimates.map(async (stimate: StimateData) => {
      const estimate = new Estimate({
        name: stimate.name,
        section: section,
        project: projectId,
      });

      let estimateId = await estimate.save();

      const refinement = new EstimateRefinement({
        estimate: estimateId,
        refinements: stimate.refinement,
      });
      await refinement.save();
    });

    const update = { lastUri: "estimate-summary" };

    const filterProject = { _id: projectId };

    await Project.findOneAndUpdate(filterProject, update);
    
    res.status(200).json({ id: projectId });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}
