import mongoose, { Schema, Types } from "mongoose";
import { IEstimate } from "./Estimate";
import { IRefinementLevel } from "./RefinementLevel";
import { IProjectCustomSpace } from "./ProjectCustomSpace";

// 1. Create an interface representing a document in MongoDB.
export interface IEstimateCustomSpaceRefinementLevel {
  estimate?: Types.ObjectId | IEstimate;
  refinementLevel?: Types.ObjectId | IRefinementLevel;
  projectCustomSpace?: Types.ObjectId | IProjectCustomSpace;
  _id?: Types.ObjectId;
}

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<IEstimateCustomSpaceRefinementLevel>({
  estimate: {
    type: Schema.Types.ObjectId,
    ref: "Estimates",
    required: true,
  },
  refinementLevel: {
    type: Schema.Types.ObjectId,
    ref: "RefinementLevels",
    required: true,
  },
  projectCustomSpace: { type: Schema.Types.ObjectId, ref: "ProjectCustomSpaces", required: true },
});

// 3. Create a Model.
const EstimateCustomSpaceRefinementLevel =
  mongoose.models.EstimateCustomSpaceRefinementLevels ??
  mongoose.model<IEstimateCustomSpaceRefinementLevel>("EstimateCustomSpaceRefinementLevels", schema);

export default EstimateCustomSpaceRefinementLevel;
