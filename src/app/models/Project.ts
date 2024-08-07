import mongoose, { Schema, Types } from "mongoose";
import { IUser } from "./User";

// 1. Create an interface representing a document in MongoDB.
export interface IProject {
  spaceName: string;
  spaceSize: Types.Decimal128;
  rentableArea: Types.Decimal128;
  headCount: string;
  averageOfficeAttendance: string;
  seatingPercentage: Types.Decimal128;
  isCompleted: boolean;
  user: Types.ObjectId | IUser;
  lastUri: string;
  createdAt: Date;
  updatedAt?: Date;
  address?: string;
  _id?: Types.ObjectId;
}

// 2. Create a Schema corresponding to the document interface.
const projectSchema = new Schema<IProject>({
  spaceName: { type: String, unique: true, required: true },
  address: { type: String },
  spaceSize: { type: Schema.Types.Decimal128, required: true },
  rentableArea: { type: Schema.Types.Decimal128, required: true },
  headCount: { type: String, required: true }, // headcount
  averageOfficeAttendance: { type: String, required: true },
  seatingPercentage: { type: Schema.Types.Decimal128, required: true },
  isCompleted: { type: Schema.Types.Boolean, default: false },
  lastUri: { type: String },
  user: { type: Schema.Types.ObjectId, ref: "Users", required: true },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
  },
});

// 3. Create a Model.
const Project =
  mongoose.models.Projects ??
  mongoose.model<IProject>("Projects", projectSchema);

export default Project;
