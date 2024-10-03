import Project from "@/models/Project";
import connect from "@/utils/db";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  connect();

  const id = params.id; // 'a', 'b', or 'c'
  console.log(id);
  try {
    const project = await Project.findById(id).exec();
    const transformData = {
      _id: project._id.toString(),
      spaceName: project.spaceName,
      floorPlan: project.floorPlan,
      address: project.address,
      spaceSize: project.spaceSize.toString(),
      rentableArea: project.rentableArea.toString(),
      headCount: project.headCount,
      averageOfficeAttendance: project.averageOfficeAttendance,
      seatingPercentage: project.seatingPercentage.toString(),
    };
    return Response.json(transformData, {
      status: 200,
    });
  } catch (err) {
    Response.json(err, { status: 500 });
  }
}
