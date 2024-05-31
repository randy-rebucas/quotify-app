import mongoose, { Schema, Types, model } from "mongoose";
import { IRole } from "./Role";
import { IAuth } from "./Auth";
import { IOffice } from "./Office";

// 1. Create an interface representing a document in MongoDB.
export interface IUser {
  email: string;
  auth: Types.ObjectId | IAuth;
  roles: [string];
  name?: string;
  avatar?: string;
  office?: Types.ObjectId | IOffice;
  _id?: Types.ObjectId;
}

// 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<IUser>(
  {
    email: { type: String },
    auth: { type: Schema.Types.ObjectId, ref: "Auth", required: true },
    roles: {
      type: [
        {
          type: String,
          enum: ["user", "admin"],
        },
      ],
      default: ["user"],
    },
    name: { type: String },
    avatar: { type: String },
    office: { type: Schema.Types.ObjectId, ref: "Offices" },
  },
  { timestamps: true }
);

// 3. Create a Model.
const User =
  mongoose.models.Users ?? mongoose.model<IUser>("Users", userSchema);

export default User;
