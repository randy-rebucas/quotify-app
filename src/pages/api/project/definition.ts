import ProjectAmenity from "@/app/models/ProjectAmenity";
import ProjectCustomSpace from "@/app/models/ProjectCustomSpace";
import connect from "@/app/utils/db";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  connect();

  const { selectedAmenityIds, selectedCustomSpaces, projectId } = req.body;

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

    res.status(200).json({ id: projectId });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}
