import mongoose, { Schema, Types, model } from "mongoose";
import { IRefinement } from "./Refinement";

// 1. Create an interface representing a document in MongoDB.
export interface IRefinementLevel {
  level: string;
  unitRate: Types.Decimal128;
  description: string;
  image: string;
  refinement?: Types.ObjectId | IRefinement;
}

// 2. Create a Schema corresponding to the document interface.
const refinementLevelSchema = new Schema<IRefinementLevel>({
  level: { type: String, required: true },
  unitRate: { type: Schema.Types.Decimal128, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  refinement: { type: Schema.Types.ObjectId, ref: "Refinements" },
});

// 3. Create a Model.
const RefinementLevel =
  mongoose.models.RefinementLevels ??
  mongoose.model<IRefinementLevel>("RefinementLevels", refinementLevelSchema);

export default RefinementLevel;
