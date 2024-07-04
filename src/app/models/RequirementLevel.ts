import mongoose, { Schema, Types, model } from "mongoose";
import { IRequirement } from "./Requirement";
import { IMedia } from "./Media";

const getCosts = (value: any) => {
  if (typeof value !== "undefined") {
    return parseFloat(value.toString());
  }
  return value;
};

// 1. Create an interface representing a document in MongoDB.
export interface IRequirementLevel {
  level: string;
  unitRate: any;
  description: string;
  image?: Types.ObjectId | IMedia;
  requirement?: Types.ObjectId | IRequirement;
  _id?: Types.ObjectId;
}

// 2. Create a Schema corresponding to the document interface.
const requirementLevelSchema = new Schema<IRequirementLevel>(
  {
    level: { type: String, required: true },
    unitRate: { type: Schema.Types.Decimal128, required: true, get: getCosts },
    description: { type: String, required: true },
    image: { type: Schema.Types.ObjectId, ref: "Medias" },
    requirement: { type: Schema.Types.ObjectId, ref: "Requirements" },
  },
  { toJSON: { getters: true } }
);

// 3. Create a Model.
const RequirementLevel =
  mongoose.models.RequirementLevels ??
  mongoose.model<IRequirementLevel>(
    "RequirementLevels",
    requirementLevelSchema
  );

export default RequirementLevel;
