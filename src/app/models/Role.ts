import mongoose, { Schema } from "mongoose";

// 1. Create an interface representing a document in MongoDB.
export interface IRole {
  name: string;
}

// 2. Create a Schema corresponding to the document interface.
const roleSchema = new Schema<IRole>({
  name: { type: String, unique: true, required: true },
});

// 3. Create a Model.
const Role =
  mongoose.models.Roles ?? mongoose.model<IRole>("Roles", roleSchema);

export default Role;
