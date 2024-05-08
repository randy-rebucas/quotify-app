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

  const transformData = projects.map((project) => {
    return {
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
  });

  return transformData;
}

export async function fetchProjectsByUserId(id: any) {
  noStore();

  connect();

  const projects = await Project.find({ user: id }).exec();

  const transformData = projects.map((project) => {
    return {
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
  });

  return transformData;
}

export async function fetchProject(id: string) {
  noStore();

  connect();

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
  
  return transformData;
}
// pageHandled
export async function fetchMenus() {
  noStore();

  connect();

  const menus = await Menu.find({ }).exec();

  return menus;
}

export async function fetchMenuById(id: string) {
  noStore();

  connect();

  const menu = await Menu.findOne({ _id: id }).exec();

  const transformData = {
    _id: menu._id.toString(),
    title: menu.title,
    pageHandled: menu.pageHandled,
  };

  return transformData;
}

export async function fetchMenuByPageHandled(query: string) {
  noStore();

  connect();

  const menus = await Menu.find({ pageHandled: query }).exec();
  const transformData = menus.map((menu) => {
    return {
      _id: menu._id.toString(),
      title: menu.title,
    };
  });

  return transformData;
}

export async function fetchAmenities() {
  noStore();

  connect();

  const amenities = await Amenity.find({}).exec();

  const transformData = amenities.map((amenity) => {
    return {
      _id: amenity._id.toString(),
      amenityName: amenity.amenityName,
    };
  });

  return transformData;
}

export async function fetchAmenityById(id: string) {
  noStore();

  connect();

  const amenity = await Amenity.findOne({ _id: id }).exec();

  const transformData = {
    _id: amenity._id.toString(),
    amenity_name: amenity.amenityName,
  };

  return transformData;
}

export async function fetchCustomSpaces() {
  noStore();

  connect();

  const custom_spaces = await CustomSpace.find({}).exec();

  const transformData = custom_spaces.map((custom_space) => {
    return {
      _id: custom_space._id.toString(),
      customSpaceName: custom_space.customSpaceName,
      customSpaceGroupName: custom_space.customSpaceGroupName,
      capacity: custom_space.capacity,
    };
  });

  return transformData;
}

export async function fetchCustomSpaceById(id: string) {
  noStore();

  connect();

  const custom_space = await CustomSpace.findOne({ _id: id }).exec();

  const transformData = {
    _id: custom_space._id.toString(),
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

  const transformData = users.map((user) => {
    return {
      _id: user._id.toString(),
      email: user.email,
      auth: user.auth._id.toString(),
      roles: user.roles,
      name: user.name,
    };
  });

  return transformData;
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

  const transformData = {
    _id: user._id.toString(),
    email: user.auth.email,
  };

  return transformData;
}
