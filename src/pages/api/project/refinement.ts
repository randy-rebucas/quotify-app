import Estimate from "@/app/models/Estimate";

import connect from "@/app/utils/db";

import type { NextApiRequest, NextApiResponse } from "next";
import EstimateRefinement from "@/app/models/EstimateRefinement";
import Project from "@/app/models/Project";
import { StimateData } from "@/app/ui/estimation/refinement/form";
import EstimateAmenityRefinementLevel from "@/app/models/EstimateAmenityRefinementLevel";

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

      item.refinement.map(
        async (refinement: {
          refinementLevelId: string;
          projectAmenityId: string;
        }) => {
          const estimateRefinementLevel = new EstimateAmenityRefinementLevel({
            estimate: estimateId,
            refinementLevel: refinement.refinementLevelId,
            projectAmenity: refinement.projectAmenityId,
          });
          await estimateRefinementLevel.save();
        }
      );
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
