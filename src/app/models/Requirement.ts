import mongoose, { Schema, Types } from "mongoose";

// 1. Create an interface representing a document in MongoDB.
export interface IRequirement {
  name: string;
  _id?: Types.ObjectId;
}

// 2. Create a Schema corresponding to the document interface.
const requirementSchema = new Schema<IRequirement>({
  name: { type: String, required: true }
});

// 3. Create a Model.
const Requirement =
  mongoose.models.Requirements ?? mongoose.model<IRequirement>("Requirements", requirementSchema);

export default Requirement;