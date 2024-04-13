import mongoose, { Schema, Types } from "mongoose";
import { IUser } from "./User";
import { IOffice } from "./Office";

// 1. Create an interface representing a document in MongoDB.
export interface IProject {
  spaceName: string;
  floorPlan: string;
  address: string;
  spaceSize: Types.Decimal128;
  rentableArea: Types.Decimal128;
  headCount: number;
  averageOfficeAttendance: number;
  seatingPercentage: Types.Decimal128;
  user: Types.ObjectId | IUser;
  office: Types.ObjectId | IOffice;
}

// 2. Create a Schema corresponding to the document interface.
const projectSchema = new Schema<IProject>({
  spaceName: { type: String, unique: true, required: true },
  floorPlan: { type: String, required: true },
  address: { type: String, required: true },
  spaceSize: { type: Schema.Types.Decimal128, required: true },
  rentableArea: { type: Schema.Types.Decimal128, required: true },
  headCount: { type: Number, required: true },
  averageOfficeAttendance: { type: Number, required: true },
  seatingPercentage: { type: Schema.Types.Decimal128, required: true },
  user: { type: Schema.Types.ObjectId, ref: "Users", required: true },
  office: {
    type: Schema.Types.ObjectId,
    ref: "Offices",
    required: true,
  },
});

// 3. Create a Model.
const Project =
  mongoose.models.Projects ??
  mongoose.model<IProject>("Projects", projectSchema);

export default Project;
