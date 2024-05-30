import mongoose, { Schema, Types, model } from "mongoose";
import { IRequirement } from "./Requirement";

// 1. Create an interface representing a document in MongoDB.
export interface IRequirementLevel {
  level: string;
  unitRate: Types.Decimal128;
  description: string;
  image: string;
  requirement?: Types.ObjectId | IRequirement;
}

// 2. Create a Schema corresponding to the document interface.
const requirementLevelSchema = new Schema<IRequirementLevel>({
  level: { type: String, required: true },
  unitRate: { type: Schema.Types.Decimal128, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  requirement: { type: Schema.Types.ObjectId, ref: "Requirements" },
});

// 3. Create a Model.
const RequirementLevel =
  mongoose.models.RequirementLevels ?? mongoose.model<IRequirementLevel>("RequirementLevels", requirementLevelSchema);

export default RequirementLevel;