import Estimate from "@/models/Estimate";

import connect from "@/utils/db";

import type { NextApiRequest, NextApiResponse } from "next";
import Project from "@/models/Project";
import EstimateAmenityRefinementLevel from "@/models/EstimateAmenityRefinementLevel";
import EstimateCustomSpaceRefinementLevel from "@/models/EstimateCustomSpaceRefinementLevel";
import { StimateData } from "@/components/estimation/refinement/entities";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  connect();
  if (req.method === "POST") {
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
            refinementId: string;
            refinementLevelId: string;
            id: string;
            type: string;
          }) => {
            if (refinement.type == "amenity") {
              const estimateRefinementLevel =
                new EstimateAmenityRefinementLevel({
                  estimate: estimateId,
                  refinement: refinement.refinementId,
                  refinementLevel: refinement.refinementLevelId,
                  projectAmenity: refinement.id,
                });
              await estimateRefinementLevel.save();
            } else {
              const estimateRefinementLevel =
                new EstimateCustomSpaceRefinementLevel({
                  estimate: estimateId,
                  refinement: refinement.refinementId,
                  refinementLevel: refinement.refinementLevelId,
                  projectCustomSpace: refinement.id,
                });
              await estimateRefinementLevel.save();
            }
          }
        );
      });

      const update = { lastUri: "estimate-summary" };

      const filterProject = { _id: projectId };

      await Project.findOneAndUpdate(filterProject, update);

      res.status(200).json({ id: projectId });
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
