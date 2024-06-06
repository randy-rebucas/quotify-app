import Estimate from "@/app/models/Estimate";
import EstimateRequirement from "@/app/models/EstimateRequirement";
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
        finish: stimate.requirement.finish,
        sustainabilityCertification: stimate.requirement.sustainabilityCertification,
        mepFeatures: stimate.requirement.mepFeatures,
        buildingCondition: stimate.requirement.buildingCondition,
        technology: stimate.requirement.technology,
        furniture: stimate.requirement.furniture
      });
      await requirement.save();
    });

    res.status(200).json({ id: projectId });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}
