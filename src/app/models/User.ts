import mongoose, { Schema, model } from "mongoose";
mongoose.Promise = global.Promise;
// 1. Create an interface representing a document in MongoDB.
export interface IUser {
  name: string;
  email: string;
  avatar?: string;
}

// 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  avatar: String,
});

// 3. Create a Model.
const User = mongoose.models.Users ?? mongoose.model<IUser>('Users', userSchema);

export default User;
