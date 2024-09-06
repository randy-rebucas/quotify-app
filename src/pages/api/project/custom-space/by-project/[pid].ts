import ProjectCustomSpace from "@/models/ProjectCustomSpace";
import connect from "@/utils/db";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  connect();

  const { pid } = req.query;

  try {
    const project_customspaces = await ProjectCustomSpace.find({ project: pid })
      .populate("customSpace")
      .exec();

    const transformData = project_customspaces.map((project_customspace) => {
      return {
        _id: project_customspace._id.toString(),                                            // project amenity id
        name: project_customspace.customSpace.customSpaceName,                               // amenity name
        type: 'customspace'
      };
    });

    res.status(200).json(transformData);
  } catch (err) {
    res.status(500).json(err);
  }
}
