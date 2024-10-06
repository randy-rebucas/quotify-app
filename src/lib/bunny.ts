import fs from "fs";
import https from "https";

const REGION = process.env.BUNNYCDN_REGION; // If German region, set this to an empty string: ''
const BASE_HOSTNAME = process.env.BUNNYCDN_BASE_HOSTNAME;
const HOSTNAME = REGION ? `${REGION}.${BASE_HOSTNAME}` : BASE_HOSTNAME;
const STORAGE_ZONE_NAME = process.env.BUNNYCDN_STORAGE_ZONE;

export const upload = (filepath: string, filename: string, folder?: string) => {
  const readStream = fs.createReadStream(filepath);

  const BUNNY_PATH =
    folder != null || folder != undefined
      ? `${folder}/${filename}`
      : `${filename}`;

  const options = {
    method: "PUT",
    host: HOSTNAME,
    path: `/${STORAGE_ZONE_NAME}/${BUNNY_PATH}`,
    headers: {
      AccessKey: process.env.BUNNYCDN_API_KEY,
      "Content-Type": "application/octet-stream",
    },
  };

  const req = https.request(options, (res) => {
    res.on("data", (chunk) => {
      console.log(chunk.toString("utf8"));
    });
  });

  req.on("error", (error) => {
    console.error(error);
  });

  readStream.pipe(req);

  return `https://${process.env.BUNNYCDN_HOSTNAME}/${BUNNY_PATH}`;
};

export const delete_file = async (filename: string, folder?: string) => {
  const options = { method: "DELETE" };
  const BUNNY_PATH =
    folder != null || folder != undefined
      ? `${folder}/${filename}`
      : `${filename}`;
      // Path: '/quotify/media/',
      // ObjectName: '1727174846616.png',
  let response = await fetch(
    `https://${HOSTNAME}/${STORAGE_ZONE_NAME}/${BUNNY_PATH}`,
    options
  );
  return response.json();
};
