import mongoose, { Schema, Types, model } from "mongoose";
import bcrypt from "bcryptjs";

// 1. Create an interface representing a document in MongoDB.
export interface IAuth {
  email: string;
  password: string;
  name?: string;
  providers?: Types.Array<string>;
  loggedAt?: Date;
  _id?: Types.ObjectId
}

// 2. Create a Schema corresponding to the document interface.
const authSchema = new Schema<IAuth>({
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
    index: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    unique: true,
  },
  providers: [String],
  loggedAt: {
    type: Date,
    default: null,
  },
});

// 3. Create a Model.
const Auth =
  mongoose.models.Auth ??
  mongoose.model<IAuth>("Auth", authSchema);

export default Auth;