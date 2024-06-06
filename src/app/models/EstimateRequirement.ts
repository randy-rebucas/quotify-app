import mongoose, { Schema, Types } from "mongoose";
import { IEstimate } from "./Estimate";
import { IRequirementLevel } from "./RequirementLevel";

// 1. Create an interface representing a document in MongoDB.
// export interface IEstimateRequirement {
//   finish: string;
//   sustainabilityCertification: string;
//   mepFeatures: string;
//   buildingCondition: string;
//   technology: string;
//   furniture: string;
//   estimate?: Types.ObjectId | IEstimate;
// }

// 2. Create a Schema corresponding to the document interface.
// const estimateRequirementSchema = new Schema<IEstimateRequirement>({
//   finish: { type: String },
//   sustainabilityCertification: { type: String },
//   mepFeatures: { type: String },
//   buildingCondition: { type: String },
//   technology: { type: String },
//   furniture: { type: String },
//   estimate: {
//     type: Schema.Types.ObjectId,
//     ref: "Estimates",
//     required: true,
//   },
// });
export interface IEstimateRequirement {
  requirements: {
    type: any;
    of: Types.ObjectId | IRequirementLevel;
  };
  estimate?: Types.ObjectId | IEstimate;
}
// Map { 'finish' => '6661910890883dbeeee0a3bf', 'sustainabilityCertification' => '664ee6391c601f1bc50c9912' }
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
