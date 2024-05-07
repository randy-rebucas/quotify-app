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

export async function fetchProjectsByUserId(id: any) {
  noStore();

  connect();

  const projects = await Project.find({ user: id }).exec();

  return projects.map((project) => {
    return {
      _id: project._id.toString(),
      spaceName: "last sample",
      floorPlan: "yu",
      address: "dsadasd",
      spaceSize: project.spaceSize.toString(),
      rentableArea: project.rentableArea.toString(),
      headCount: "5",
      averageOfficeAttendance: "5",
      seatingPercentage: project.seatingPercentage.toString(),
    };
  });
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

  const amenities = await Amenity.find({}).exec();

  return amenities.map((amenity) => {
    return {
      _id: amenity._id.toString(),
      amenityName: amenity.amenityName,
    };
  });
}

export async function fetchAmenityById(id: string) {
  noStore();

  connect();

  const amenity = await Amenity.findOne({ _id: id }).exec();

  const transformData = {
    id: amenity._id.toString(),
    amenity_name: amenity.amenityName,
  };
  return transformData;
}

export async function fetchCustomSpaces() {
  noStore();

  connect();

  const custom_spaces = await CustomSpace.find({}).exec();

  return custom_spaces;
}

export async function fetchCustomSpaceById(id: string) {
  noStore();

  connect();

  const custom_space = await CustomSpace.findOne({ _id: id }).exec();
  const transformData = {
    id: custom_space._id.toString(),
    custom_space_name: custom_space.customSpaceName,
    custom_space_group_name: custom_space.customSpaceGroupName,
    capacity: custom_space.capacity,
  };
  return transformData;
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

  const transformData = customSpaces
    .filter((v) => {
      return v._id !== "";
    })
    .map((x) => {
      const transformSpaces = x.spaces.map((y: any) => {
        return {
          ...y,
          id: y.id.toString(),
        };
      });

      return {
        _id: x._id,
        spaces: transformSpaces,
      };
    });

  return transformData;
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

  await User.findOneAndDelete({ _id: id }).exec();
  revalidatePath("/setting/users");
  return { message: "Deleted User." };
}

export async function fetchUserById(id: string) {
  noStore();

  connect();

  const user = await User.findOne({ _id: id }).populate("auth").exec();
  return { id: user._id.toString(), email: user.auth.email };
}
