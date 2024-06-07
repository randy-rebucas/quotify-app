import mongoose, { Schema, Types } from "mongoose";
import { IEstimate } from "./Estimate";
import { IRequirementLevel } from "./RequirementLevel";

// 1. Create an interface representing a document in MongoDB.
export interface IEstimateRequirement {
  requirements: {
    type: any;
    of: Types.ObjectId | IRequirementLevel;
  };
  estimate?: Types.ObjectId | IEstimate;
}

// 2. Create a Schema corresponding to the document interface.
const estimateRequirementSchema = new Schema<IEstimateRequirement>({
  requirements: {
    type: Schema.Types.Map,
    of: {
      type: Schema.Types.ObjectId,
      ref: "RequirementLevels"
    }
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
