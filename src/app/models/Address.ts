import mongoose, { Schema, Types } from "mongoose";
import { IProject } from "./Project";

// 1. Create an interface representing a document in MongoDB.
export interface IAddress {
  line1: string;
  line2: string;
  state: string;
  zipCode: string;
  project?: Types.ObjectId | IProject;
  _id?: Types.ObjectId;
}
// 2. Create a Schema corresponding to the document interface.
const addressSchema = new Schema<IAddress>({
  line1: { type: String, required: true },
  line2: { type: String },
  state: { type: String, required: true },
  zipCode: { type: String, required: true },
  project: { type: Schema.Types.ObjectId, ref: "Projects", required: true },
});

// 3. Create a Model.
const Address =
  mongoose.models.Addresses ??
  mongoose.model<IAddress>("Addresses", addressSchema);

export default Address;
