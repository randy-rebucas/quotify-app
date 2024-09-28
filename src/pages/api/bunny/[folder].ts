import type { NextApiRequest, NextApiResponse } from "next";

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
  const { folder } = req.query;

  try {
    // floorplans | media
    const url = `https://${HOSTNAME}/${STORAGE_ZONE_NAME}/${folder}/`;
    const req = fetch(url, {
      method: "GET",
      headers: {
        AccessKey: process.env.BUNNYCDN_API_KEY as string,
        accept: "application/json",
      },
    }).then((response) => response.json()) as Promise<APIStorageEntity[]>;

    const transformed = req.then((response) => {
      return response.map((file) => {
        return {
          ...file,
          LastChanged: new Date(file.LastChanged),
          DateCreated: new Date(file.DateCreated),
        };
      });
    });

    res.status(200).json(await transformed);
  } catch (err) {
    res.status(500).json(err);
  }
}
