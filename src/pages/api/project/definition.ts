import Project from "@/models/Project";
import ProjectAmenity from "@/models/ProjectAmenity";
import ProjectCustomSpace from "@/models/ProjectCustomSpace";
import connect from "@/utils/db";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  connect();
  if (req.method === "POST") {
    const { selectedAmenityIds, selectedCustomSpaces, projectId } = JSON.parse(
      req.body
    );

    try {
      selectedAmenityIds.map(async (selectedAmenityId: any) => {
        const projectAminity = new ProjectAmenity({
          project: projectId,
          amenity: selectedAmenityId,
        });
        await projectAminity.save();
      });

      selectedCustomSpaces.map(
        async (selectedCustomSpace: {
          id: number;
          space: string;
          quantity: number;
        }) => {
          const projectCustomSpace = new ProjectCustomSpace({
            project: projectId,
            customSpace: selectedCustomSpace.space,
            quantity: selectedCustomSpace.quantity,
          });
          await projectCustomSpace.save();
        }
      );

      const update = { lastUri: "project-definition" };

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
