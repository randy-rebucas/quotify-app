import CustomSpace from "@/app/models/CustomSpace";
import connect from "@/app/utils/db";
import type { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuid } from 'uuid'

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "500kb",
    },
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  connect();

  switch (req.method) {
    case "POST":
      const { customSpaceName, customSpaceGroupName, capacity } = req.body;

      try {
        const custom_space = new CustomSpace({
          _id: uuid(),
          customSpaceName: customSpaceName,
          customSpaceGroupName: customSpaceGroupName,
          capacity: capacity,
        });

        let data = await custom_space.save();

        res.status(200).json(data);
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
      break;

    default:
      try {
        const custom_spaces = await CustomSpace.find({}).exec();

        res.status(200).json({ custom_spaces });
      } catch (err) {
        res.status(500).json({ error: "failed to load data" });
      }
      break;
  }
}
