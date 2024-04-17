import mongoose, { Schema, Types } from "mongoose";

// 1. Create an interface representing a document in MongoDB.
export interface IAuth {
  email: string;
  password: string;
  loggedAt?: Date;
}

export interface IWithIdAuth extends IAuth {
  _id: string;
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