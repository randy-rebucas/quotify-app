import { unstable_noStore as noStore } from "next/cache";
import connect from "../utils/db";
import Project from "../models/Project";
import Amenity, { IAmenity } from "../models/Amenity";
import Menu from "../models/Menu";
import CustomSpace from "../models/CustomSpace";

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

export async function fetchMenus() {
  noStore();

  connect();

  const menus = await Menu.find({}).lean();

  return menus;
}

export async function fetchAmenities() {
  noStore();

  connect();

  const amenities = await Amenity.find({}).lean();

  return amenities;
}

export async function fetchCustomSpaces() {
  noStore();

  connect();

  const customSpaces = await CustomSpace.aggregate([
    {
      $group: {
        _id: "$customSpaceGroupName",
        spaces: {
          $push: {
            space_name: "$customSpaceName",
            capacity: "$capacity",
          },
        }, 
      },
    },
  ]);

  return customSpaces;
}
