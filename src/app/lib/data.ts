import { unstable_noStore as noStore, revalidatePath } from "next/cache";
import connect from "../utils/db";
import Project from "../models/Project";
import Amenity, { IAmenity } from "../models/Amenity";
import Menu from "../models/Menu";
import CustomSpace from "../models/CustomSpace";
import User from "../models/User";
import Estimate from "../models/Estimate";
import Office from "../models/Office";
import AmenityCategory from "../models/AmenityCategory";
import Requirement from "../models/Requirement";
import Refinement from "../models/Refinement";
import RefinementLevel from "../models/RefinementLevel";
import path from "path";

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

  const menus = await Menu.find({}).exec();

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

  const amenity = await Amenity.findOne({ _id: id })
    .populate("category")
    .exec();

  const transformData = {
    _id: amenity._id.toString(),
    amenity_name: amenity.amenityName,
    category_id: amenity.category ? amenity.category._id.toString() : null,
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

  const users = await User.find({}).populate("office").exec();

  const transformData = users.map((user) => {
    return {
      _id: user._id.toString(),
      email: user.email,
      auth: user.auth._id.toString(),
      roles: user.roles,
      name: user.name,
      office: user.office,
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

  const user = await User.findOne({ _id: id })
    .populate("office")
    .populate("auth")
    .exec();

  const transformData = {
    _id: user._id.toString(),
    email: user.auth.email,
    office_id: user.office ? user.office._id.toString() : null,
  };

  return transformData;
}

export async function fetchEstimatesByProjectId(projectId: string) {
  noStore();

  connect();

  const esimates = await Estimate.find({ project: projectId }).exec();

  const transformData = esimates.map((esimate) => {
    return {
      _id: esimate._id.toString(),
      name: esimate.name,
      project: esimate.project._id.toString(),
    };
  });

  return transformData;
}

export async function fetchEstimatesBySection(
  projectId: string,
  section: string
) {
  noStore();

  connect();

  const esimates = await Estimate.find({
    project: projectId,
    section: section,
  }).exec();

  const transformData = esimates.map((esimate) => {
    return {
      _id: esimate._id.toString(),
      name: esimate.name,
      project: esimate.project._id.toString(),
    };
  });

  return transformData;
}

export async function fetchOffices() {
  noStore();

  connect();

  const offices = await Office.find({}).exec();

  const transformData = offices.map((office) => {
    return {
      _id: office._id.toString(),
      location: office.location,
      status: office.status,
    };
  });

  return transformData;
}

export async function deleteOffice(id: string) {
  noStore();

  connect();

  await Office.findOneAndDelete({ _id: id }).exec();

  revalidatePath("/setting/offices");

  return { message: "Deleted Office." };
}

export async function fetchOfficeById(id: string) {
  noStore();

  connect();

  const office = await Office.findOne({ _id: id }).exec();

  const transformData = {
    _id: office._id.toString(),
    location: office.location,
    status: office.status,
  };

  return transformData;
}

export async function fetchOfficeByStatus(status: string) {
  noStore();

  connect();

  const office = await Office.findOne({ status: status }).exec();

  const transformData = {
    _id: office._id.toString(),
    location: office.location,
    status: office.status,
  };

  return transformData;
}

export async function fetchDefaultOffice() {
  noStore();

  connect();

  const office = await Office.findOne({ status: 1 }).limit(1).exec();

  let transformData = null;

  if (office) {
    transformData = {
      _id: office._id.toString(),
      location: office.location,
      status: office.status,
    };
  }

  return transformData;
}

export async function fetchAmenityCategories() {
  noStore();

  connect();

  const amenityCategories = await AmenityCategory.find({}).exec();

  const transformData = amenityCategories.map((amenityCategory) => {
    return {
      _id: amenityCategory._id.toString(),
      name: amenityCategory.name,
    };
  });

  return transformData;
}

export async function deleteAmenityCategory(id: string) {
  noStore();

  connect();

  await AmenityCategory.findOneAndDelete({ _id: id }).exec();

  revalidatePath("/setting/amenity-categories");

  return { message: "Deleted category." };
}

export async function fetchAmenityCategoryById(id: string) {
  noStore();

  connect();

  const amenityCategory = await AmenityCategory.findOne({ _id: id }).exec();

  const transformData = {
    _id: amenityCategory._id.toString(),
    name: amenityCategory.name,
  };

  return transformData;
}

export async function fetchRequirements() {
  noStore();

  connect();

  const items = await Requirement.find({}).exec();

  const transformItems = items.map((item) => {
    return {
      _id: item._id.toString(),
      name: item.name,
    };
  });

  return transformItems;
}

export async function deleteRequirement(id: string) {
  noStore();

  connect();

  await Requirement.findOneAndDelete({ _id: id }).exec();

  revalidatePath("/setting/requirements");

  return { message: "Deleted requirement." };
}

export async function fetchRequirementById(id: string) {
  noStore();

  connect();

  const item = await Requirement.findOne({ _id: id }).exec();

  const transformItem = {
    _id: item._id.toString(),
    name: item.name,
  };

  return transformItem;
}

export async function fetchRefinements() {
  noStore();

  connect();

  const items = await Refinement.find({}).exec();

  const transformItems = items.map((item) => {
    return {
      _id: item._id.toString(),
      name: item.name,
    };
  });

  return transformItems;
}

export async function deleteRefinement(id: string) {
  noStore();

  connect();

  await Refinement.findOneAndDelete({ _id: id }).exec();

  revalidatePath("/setting/refinements");

  return { message: "Deleted refinement." };
}

export async function fetchRefinementById(id: string) {
  noStore();

  connect();

  const item = await Refinement.findOne({ _id: id }).exec();

  const transformItem = {
    _id: item._id.toString(),
    name: item.name,
  };

  return transformItem;
}

export async function fetchRefinementLevels() {
  noStore();

  connect();

  const items = await RefinementLevel.find({}).populate('refinement').exec();

  const transformItems = items.map((item) => {
    return {
      _id: item._id.toString(),
      level: item.level,
      unitRate: item.unitRate.toString(),
      description: item.description,
      image: item.image,
      refinement: item.refinement,
    };
  });

  return transformItems;
}

export async function deleteRefinementLevel(id: string) {
  noStore();

  connect();

  await RefinementLevel.findOneAndDelete({ _id: id }).exec();

  revalidatePath("/setting/refinement-levels");

  return { message: "Deleted refinement level." };
}

export async function fetchRefinementlevelById(id: string) {
  noStore();

  connect();

  const item = await RefinementLevel.findOne({ _id: id }).populate('refinement').exec();

  const transformItem = {
    _id: item._id.toString(),
    level: item.level,
    unitRate: item.unitRate.toString(),
    description: item.description,
    image: item.image,
    refinementId: item.refinement._id.toString(),
  };

  return transformItem;
}
