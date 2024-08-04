import mongoose, { Schema, Types } from "mongoose";
import { IEstimateRequirement } from "./EstimateRequirement";
import { IRefinementLevel } from "./RefinementLevel";
import { IRequirementLevel } from "./RequirementLevel";

// 1. Create an interface representing a document in MongoDB.
export interface IEstimateRequirementLevel {
  estimateRequirement?: Types.ObjectId | IEstimateRequirement;
  requirementLevel?: Types.ObjectId | IRequirementLevel;
}

// 2. Create a Schema corresponding to the document interface.
const estimateRequirementLevelSchema = new Schema<IEstimateRequirementLevel>({
  estimateRequirement: {
    type: Schema.Types.ObjectId,
    ref: "EstimateRequirements",
    required: true,
  },
  requirementLevel: {
    type: Schema.Types.ObjectId,
    ref: "RequirementLevels",
    required: true,
  },
});

// 3. Create a Model.
const EstimateRequirementLevel =
  mongoose.models.EstimateRequirementLevels ??
  mongoose.model<IEstimateRequirementLevel>(
    "EstimateRequirementLevels",
    estimateRequirementLevelSchema
  );

export default EstimateRequirementLevel;
