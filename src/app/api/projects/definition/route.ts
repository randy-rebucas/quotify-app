import Project from "@/models/Project";
import ProjectAmenity from "@/models/ProjectAmenity";
import ProjectCustomSpace from "@/models/ProjectCustomSpace";
import connect from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  connect();
  const data = await request.json();
  console.log(data);
  const { selectedAmenityIds, selectedCustomSpaces, projectId } =
    JSON.parse(data);

  try {
    selectedAmenityIds.map(async (selectedAmenityId: any) => {
      const projectAminity = new ProjectAmenity({
        project: projectId,
        amenity: selectedAmenityId,
      });
      await projectAminity.save();
    });

    selectedCustomSpaces.map(
      async (selectedCustomSpace: {
        id: number;
        space: string;
        quantity: number;
      }) => {
        const projectCustomSpace = new ProjectCustomSpace({
          project: projectId,
          customSpace: selectedCustomSpace.space,
          quantity: selectedCustomSpace.quantity,
        });
        await projectCustomSpace.save();
      }
    );

    const update = { lastUri: "project-definition" };

    const filterProject = { _id: projectId };

    await Project.findOneAndUpdate(filterProject, update);

    return NextResponse.json(
      { id: projectId },
      {
        status: 200,
      }
    );
  } catch (err) {
    return NextResponse.json(err, {
      status: 500,
    });
  }
}
