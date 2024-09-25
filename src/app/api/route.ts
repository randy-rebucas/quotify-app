export async function GET(request: Request) {
  return Response.json({ version: "14.1.4" });
}
