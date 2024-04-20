import Menu from "@/app/models/Menu";
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
        title,
        pageHandled
      } = req.body;

      try {
        const menu = new Menu({
            title: title,
            pageHandled: pageHandled
        });

        let data = await menu.save();

        res.status(200).json(data);
      } catch (err) {
        console.log(err)
        res.status(500).json(err);
      }
      break;

    default:
      try {

        const menus = await Menu.find({pageHandled: req.query.page}).exec();

        res.status(200).json({ menus });
      } catch (err) {
        res.status(500).json({ error: "failed to load data" });
      }
      break;
  }
}
