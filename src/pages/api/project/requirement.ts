import Estimate from "@/app/models/Estimate";
import EstimateRequirement from "@/app/models/EstimateRequirement";
import Project from "@/app/models/Project";
import { StimateData } from "@/app/ui/estimation/requirement/entities";
import connect from "@/app/utils/db";

import type { NextApiRequest, NextApiResponse } from "next";

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

      const requirement = new EstimateRequirement({
        estimate: estimateId,
        requirements: {
          finish: stimate.requirement.finish?.value,
          sustainabilityCertification:
            stimate.requirement.sustainabilityCertification?.value,
          mepFeatures: stimate.requirement.mepFeatures?.value,
          buildingCondition: stimate.requirement.buildingCondition?.value,
          technology: stimate.requirement.technology?.value,
          furniture: stimate.requirement.furniture?.value,
        },
      });
      await requirement.save();
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
