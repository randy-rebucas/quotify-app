"use server";

import { revalidatePath } from "next/cache";
import Project from "../models/Project";
import { ProjectFormSchema, ProjectFormState } from "../lib/definitions";
import { redirect } from "next/navigation";
import { useProjectInformationStore } from "../lib/projectInformationStore";

const CreateProject = ProjectFormSchema.omit({ id: true });

export async function createProject(
  prevState: ProjectFormState,
  formData: FormData
) {
  // const spaceName = useProjectInformationStore(state => state.spaceName);
  // Validate form using Zod
  const validatedFields = CreateProject.safeParse({
    space_name: formData.get("space_name"),
    has_floor_plan: formData.get("has_floor_plan"),
    has_address: formData.get("has_address"),
    approximate_size: formData.get("approximate_size"),
    rentable_area: formData.get("rentable_area"),
    is_base_on_head_count: formData.get("is_base_on_head_count"),
    target_head_count: formData.get("target_head_count"),
    average_attendance: formData.get("average_attendance"),
    assigned_seat: formData.get("assigned_seat"),
  });

  console.log(validatedFields);
  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const {
    space_name,
    approximate_size,
    rentable_area,
    target_head_count,
    average_attendance,
    assigned_seat,
  } = validatedFields.data;

  // const project = new Project({
  //   spaceName: space_name,
  //   spaceSize: approximate_size,
  //   rentableArea: rentable_area,
  //   headCount: target_head_count,
  //   averageOfficeAttendance: average_attendance,
  //   seatingPercentage: assigned_seat,
  // });
  // let projectResponse = await project.save();
  // console.log(projectResponse);
  // // Revalidate the cache for the invoices page and redirect the user.
  // revalidatePath("/estimation/area-breakdown");
  // redirect("/estimation/area-breakdown");
}

export async function deleteProject(id: string) {
  try {
    await Project.findOneAndDelete({ _id: id }).exec();
    revalidatePath("/setting/projects");
    return { message: "Deleted Project." };
  } catch (error) {
    return { message: "Database Error: Failed to Delete Project." };
  }
}
