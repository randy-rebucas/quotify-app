import { unstable_noStore as noStore, revalidatePath } from "next/cache";
import connect from "../utils/db";
import Project from "../models/Project";
import Amenity, { IAmenity } from "../models/Amenity";
import Menu from "../models/Menu";
import CustomSpace from "../models/CustomSpace";
import User from "../models/User";

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
// pageHandled
export async function fetchMenus(query: string) {
  noStore();

  connect();

  const menus = await Menu.find({ pageHandled: query }).lean();

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

  const custom_spaces = await CustomSpace.find({}).lean();

  return custom_spaces;
}

export async function fetchCustomSpacesByGroup() {
  noStore();

  connect();

  const customSpaces = await CustomSpace.aggregate([
    {
      $group: {
        _id: "$customSpaceGroupName",
        spaces: {
          $push: {
            id: "$_id",
            space_name: "$customSpaceName",
            capacity: "$capacity",
          },
        },
      },
    },
  ]);

  return customSpaces;
}


export async function fetchUsers() {
  noStore();

  connect();

  const users = await User.find({}).exec();

  return users;
}

export async function deleteUser(id: string) {
  noStore();

  connect();
  try {
    const users = await User.findOneAndDelete({_id : id}).exec();
    revalidatePath('/setting/users');
    return { message: 'Deleted User.' };
  } catch (error) {
    return { message: 'Database Error: Failed to Delete User.' };
  }
}

export async function fetchUserById(id: string) {
  noStore();
  connect();
  try {
    const user = await User.findOne({_id : id}).populate('auth').exec();
    return {id: user._id.toString(), email: user.auth.email};
  } catch (error) {
    return { message: 'Database Error: Failed to Delete User.' };
  }
}