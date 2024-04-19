import { unstable_noStore as noStore } from "next/cache";
import connect from "../utils/db";
import Project from "../models/Project";

export async function fetchProjects() {
  noStore();

  connect();

  const projects = await Project.find({}).exec();

  return projects;
}

export async function fetchProject(id: string) {
  noStore();

  connect();

  const project = await Project.findById(id).exec();

  return project;
}
