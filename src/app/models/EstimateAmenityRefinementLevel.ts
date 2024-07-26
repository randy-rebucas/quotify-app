import mongoose, { Schema, Types } from "mongoose";
import { IProjectAmenity } from "./ProjectAmenity";
import { IEstimate } from "./Estimate";
import { IRefinementLevel } from "./RefinementLevel";
import { IRefinement } from "./Refinement";

// 1. Create an interface representing a document in MongoDB.
export interface IEstimateAmenityRefinementLevel {
  estimate?: Types.ObjectId | IEstimate;
  refinement?: Types.ObjectId | IRefinement;
  refinementLevel?: Types.ObjectId | IRefinementLevel;
  projectAmenity?: Types.ObjectId | IProjectAmenity;
  _id?: Types.ObjectId;
}

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<IEstimateAmenityRefinementLevel>({
  estimate: {
    type: Schema.Types.ObjectId,
    ref: "Estimates",
    required: true,
  },
  refinement: {
    type: Schema.Types.ObjectId,
    ref: "Refinement",
    required: true,
  },
  refinementLevel: {
    type: Schema.Types.ObjectId,
    ref: "RefinementLevels",
    required: true,
  },
  projectAmenity: {
    type: Schema.Types.ObjectId,
    ref: "ProjectAmenities",
    required: true,
  },
});

// 3. Create a Model.
const EstimateAmenityRefinementLevel =
  mongoose.models.EstimateAmenityRefinementLevels ??
  mongoose.model<IEstimateAmenityRefinementLevel>(
    "EstimateAmenityRefinementLevels",
    schema
  );

export default EstimateAmenityRefinementLevel;
