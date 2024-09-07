import mongoose, { Schema, Types } from "mongoose";
import { IAmenity } from "./Amenity";
import { IProject } from "./Project";

// 1. Create an interface representing a document in MongoDB.
export interface IProjectAmenity {
  project?: Types.ObjectId | IProject;
  amenity?: Types.ObjectId | IAmenity;
  _id?: Types.ObjectId;
}

// 2. Create a Schema corresponding to the document interface.
const projectAmenitySchema = new Schema<IProjectAmenity>({
  project: { type: Schema.Types.ObjectId, ref: "Projects", required: true },
  amenity: { type: Schema.Types.ObjectId, ref: "Amenities", required: true },
});

// 3. Create a Model.
const ProjectAmenity =
  mongoose.models.ProjectAmenities ??
  mongoose.model<IProjectAmenity>("ProjectAmenities", projectAmenitySchema);

export default ProjectAmenity;
