import mongoose, { Schema, Types } from "mongoose";
import { IUser } from "./User";
import { IOffice } from "./Office";

export interface IAddress {
  line1: string;
  line2: string;
  state: string;
  zipCode: string;
}
// 1. Create an interface representing a document in MongoDB.
export interface IProject {
  spaceName: string;
  floorPlan: string;
  address: IAddress;
  spaceSize: Types.Decimal128;
  rentableArea: Types.Decimal128;
  headCount: string;
  averageOfficeAttendance: string;
  seatingPercentage: Types.Decimal128;
  user: Types.ObjectId | IUser;
  _id?: Types.ObjectId;
  // office?: Types.ObjectId | IOffice;
}

// 2. Create a Schema corresponding to the document interface.
const projectSchema = new Schema<IProject>({
  spaceName: { type: String, unique: true, required: true },
  floorPlan: { type: String, required: true },
  address: { type: String, required: true },
  spaceSize: { type: Schema.Types.Decimal128, required: true },
  rentableArea: { type: Schema.Types.Decimal128, required: true },
  headCount: { type: String, required: true },
  averageOfficeAttendance: { type: String, required: true },
  seatingPercentage: { type: Schema.Types.Decimal128, required: true },
  user: { type: Schema.Types.ObjectId, ref: "Users", required: true },
  // office: {
  //   type: Schema.Types.ObjectId,
  //   ref: "Offices",
  // },
});

// 3. Create a Model.
const Project =
  mongoose.models.Projects ??
  mongoose.model<IProject>("Projects", projectSchema);

export default Project;
