import mongoose, { Schema, Types } from "mongoose";
import { IEstimate } from "./Estimate";

// 1. Create an interface representing a document in MongoDB.
export interface IEstimateRefinement {
  flooring: string;
  partitions: string;
  estimate?: Types.ObjectId | IEstimate;
}

// 2. Create a Schema corresponding to the document interface.
const estimateRefinementSchema = new Schema<IEstimateRefinement>({
  flooring: { type: String },
  partitions: { type: String },
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
