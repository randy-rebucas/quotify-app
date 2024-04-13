import mongoose, { Schema, Types, model } from "mongoose";
import { IRole } from "./Role";
import { IAuth } from "./Auth";
import { IOffice } from "./Office";

mongoose.Promise = global.Promise;
// 1. Create an interface representing a document in MongoDB.
export interface IUser {
  name: string;
  email: string;
  auth: Types.ObjectId | IAuth;
  avatar?: string;
  role?: Types.ObjectId | IRole;
  office?: Types.ObjectId | IOffice;
}

// 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  auth: { type: Schema.Types.ObjectId, ref: "Auth", required: true },
  avatar: { type: String },
  role: { type: Schema.Types.ObjectId, ref: "Roles" },
  office: { type: Schema.Types.ObjectId, ref: "Offices" },
});

// 3. Create a Model.
const User =
  mongoose.models.Users ?? mongoose.model<IUser>("Users", userSchema);

export default User;
