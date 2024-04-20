import Amenity from "@/app/models/Amenity";
import connect from "@/app/utils/db";
import type { NextApiRequest, NextApiResponse } from "next";

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
      const {
        amenityName
      } = req.body;

      try {
        const amenity = new Amenity({
            amenityName: amenityName
        });

        let data = await amenity.save();

        res.status(200).json(data);
      } catch (err) {
        console.log(err)
        res.status(500).json(err);
      }
      break;

    default:
      try {
        const amenities = await Amenity.find({}).exec();

        res.status(200).json({ amenities });
      } catch (err) {
        res.status(500).json({ error: "failed to load data" });
      }
      break;
  }
}
