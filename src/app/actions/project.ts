"use server";

import { revalidatePath } from "next/cache";
import Project from "../models/Project";

export async function deleteProject(id: string) {
    try {
      await Project.findOneAndDelete({ _id: id }).exec();
      revalidatePath("/setting/projects");
      return { message: "Deleted Project." };
    } catch (error) {
      return { message: "Database Error: Failed to Delete Project." };
    }
  }