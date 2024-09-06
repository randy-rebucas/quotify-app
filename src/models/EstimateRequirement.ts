import mongoose, { Schema, Types } from "mongoose";
import { IEstimate } from "./Estimate";
import { IRequirement } from "./Requirement";
import { IRefinementLevel } from "./RefinementLevel";

// 1. Create an interface representing a document in MongoDB.
export interface IEstimateRequirement {
  requirement?: Types.ObjectId | IRequirement;
  requirementLevel?: Types.ObjectId | IRefinementLevel;
  estimate?: Types.ObjectId | IEstimate;
}

// 2. Create a Schema corresponding to the document interface.
const estimateRequirementSchema = new Schema<IEstimateRequirement>({
  requirement: {
    type: Schema.Types.ObjectId,
    ref: "Requirements",
    required: true,
  },
  requirementLevel: {
    type: Schema.Types.ObjectId,
    ref: "RequirementLevels",
    required: true,
  },
  estimate: {
    type: Schema.Types.ObjectId,
    ref: "Estimates",
    required: true,
  },
});

// 3. Create a Model.
const EstimateRequirement =
  mongoose.models.EstimateRequirements ??
  mongoose.model<IEstimateRequirement>(
    "EstimateRequirements",
    estimateRequirementSchema
  );

export default EstimateRequirement;
