import mongoose, { Schema, Types } from "mongoose";
import { IEstimate } from "./Estimate";
import { IRefinementLevel } from "./RefinementLevel";

// 1. Create an interface representing a document in MongoDB.
export interface IEstimateRefinement {
  refinements: {
    type: any;
    of: Types.ObjectId | IRefinementLevel;
  };
  estimate?: Types.ObjectId | IEstimate;
}

// 2. Create a Schema corresponding to the document interface.
const estimateRefinementSchema = new Schema<IEstimateRefinement>({
  refinements: {
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
const EstimateRefinement =
  mongoose.models.EstimateRefinements ??
  mongoose.model<IEstimateRefinement>(
    "EstimateRefinements",
    estimateRefinementSchema
  );

export default EstimateRefinement;
