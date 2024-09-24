import type { NextApiRequest, NextApiResponse } from "next";

export const config = {
  api: {
    externalResolver: true,
  },
};

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

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const REGION = process.env.BUNNYCDN_REGION; // If German region, set this to an empty string: ''
      const BASE_HOSTNAME = process.env.BUNNYCDN_BASE_HOSTNAME;
      const HOSTNAME = REGION ? `${REGION}.${BASE_HOSTNAME}` : BASE_HOSTNAME;
      const STORAGE_ZONE_NAME = process.env.BUNNYCDN_STORAGE_ZONE;

      const url = `https://${HOSTNAME}/${STORAGE_ZONE_NAME}/floorplans/`;
      const request = fetch(url, {
        method: "GET",
        headers: {
          AccessKey: process.env.BUNNYCDN_API_KEY as string,
          accept: "application/json",
        },
      }).then((response) => response.json()) as Promise<APIStorageEntity[]>;

      const transformed = request.then((response) => {
        console.log(response);
        return response.map((file) => {
          return {
            ...file,
            LastChanged: new Date(file.LastChanged),
            DateCreated: new Date(file.DateCreated),
          };
        });
      });

      res.status(200).json(transformed);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
