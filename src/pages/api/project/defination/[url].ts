import Project from "@/app/models/Project";
import connect from "@/app/utils/db";

import type { NextApiRequest, NextApiResponse } from "next";
import puppeteer from "puppeteer";

const saveAsPdf = async (url: string) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(url, {
    waitUntil: "networkidle0",
  });

  const result = await page.pdf({
    format: "a4",
  });
  await browser.close();

  return result;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  connect();

  const { url } = req.query;
  console.log(url);
  // res.setHeader(
  //   'Content-Disposition',
  //   `attachment; filename="file.pdf"`
  // );
  // res.setHeader('Content-Type', 'application/pdf');

  // const pdf = await saveAsPdf(url as string);

  // return res.send(pdf);
  //   try {
  //     const update = { lastUri: "requirement" };

  //     const filterProject = { _id: projectId };

  //     await Project.findOneAndUpdate(filterProject, update);

  //     //
//   res.status(200).json({ message: "ok" });
  //   } catch (err) {
  //     console.log(err);
  //     res.status(500).json(err);
  //   }
}
