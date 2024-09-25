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

export async function GET(request: Request) {
  const url = `https://${HOSTNAME}/${STORAGE_ZONE_NAME}/`;
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
  return Response.json(await transformed);
}

export async function POST(request: Request) {
  const { filepath, filename, folder } = await request.json();

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

  return Response.json({
    preview: `https://${process.env.BUNNYCDN_HOSTNAME}/${BUNNY_PATH}`,
  });
}
