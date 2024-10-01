import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import https from "https";

export interface APIStorageEntity {
  Guid: string;
  StorageZoneName: string;
  Path: string;
  ObjectName: string;
  Length: number;
  LastChanged: string;
  IsDirectory: boolean;
  ServerId: number;
  UserId: string;
  DateCreated: string;
  StorageZoneId: number;
}

const REGION = process.env.BUNNYCDN_REGION; // If German region, set this to an empty string: ''
const BASE_HOSTNAME = process.env.BUNNYCDN_BASE_HOSTNAME;
const HOSTNAME = REGION ? `${REGION}.${BASE_HOSTNAME}` : BASE_HOSTNAME;
const STORAGE_ZONE_NAME = process.env.BUNNYCDN_STORAGE_ZONE;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  
  const { filepath, filename, folder } = req.body;
  
  if (req.method === "GET") {
    // Process a POST request
    const url = `https://${HOSTNAME}/${STORAGE_ZONE_NAME}/`;
    const request = fetch(url, {
      method: "GET",
      headers: {
        AccessKey: process.env.BUNNYCDN_API_KEY as string,
        accept: "application/json",
      },
    }).then((response) => response.json()) as Promise<APIStorageEntity[]>;

    const transformed = request.then((response) => {
      return response.map((file) => {
        return {
          ...file,
          LastChanged: new Date(file.LastChanged),
          DateCreated: new Date(file.DateCreated),
        };
      });
    });
    return Response.json(await transformed);
  } else if (req.method === "POST") {
    const readStream = fs.createReadStream(filepath);

    const BUNNY_PATH: any =
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

    return Response.json({
      preview: `https://${process.env.BUNNYCDN_HOSTNAME}/${BUNNY_PATH}`,
    });
  } else {
    // Handle any other HTTP method
  }
}
