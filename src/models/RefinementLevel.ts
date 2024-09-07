import mongoose, { Schema, Types, model } from "mongoose";
import { IRefinement } from "./Refinement";
import { IMedia } from "./Media";

const getUnitRates = (value: any) => {
  if (typeof value !== "undefined") {
    return parseFloat(value.toString());
  }
  return value;
};

// 1. Create an interface representing a document in MongoDB.
export interface IRefinementLevel {
  level: string;
  unitRate: any;
  description: string;
  image?: Types.ObjectId | IMedia;
  refinement?: Types.ObjectId | IRefinement;
  _id?: Types.ObjectId;
}

// 2. Create a Schema corresponding to the document interface.
const refinementLevelSchema = new Schema<IRefinementLevel>(
  {
    level: { type: String, required: true },
    unitRate: {
      type: Schema.Types.Decimal128,
      required: true,
      get: getUnitRates,
    },
    description: { type: String, required: true },
    image: { type: Schema.Types.ObjectId, ref: "Medias" },
    refinement: { type: Schema.Types.ObjectId, ref: "Refinements" },
  },
  { toJSON: { getters: true } }
);

// 3. Create a Model.
const RefinementLevel =
  mongoose.models.RefinementLevels ??
  mongoose.model<IRefinementLevel>("RefinementLevels", refinementLevelSchema);

export default RefinementLevel;
