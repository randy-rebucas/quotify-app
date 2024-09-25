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

export async function GET(request: Request, { params }: { params: { folder: string } }) {
  const REGION = process.env.BUNNYCDN_REGION; // If German region, set this to an empty string: ''
  const BASE_HOSTNAME = process.env.BUNNYCDN_BASE_HOSTNAME;
  const HOSTNAME = REGION ? `${REGION}.${BASE_HOSTNAME}` : BASE_HOSTNAME;
  const STORAGE_ZONE_NAME = process.env.BUNNYCDN_STORAGE_ZONE;
  // floorplans
  const url = `https://${HOSTNAME}/${STORAGE_ZONE_NAME}/${params.folder}/`;
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
