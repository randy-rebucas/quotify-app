import mongoose, { Schema, Types } from "mongoose";
import { IProject } from "./Project";

// 1. Create an interface representing a document in MongoDB.
export interface IFloorPlan {
  filename: string;
  type: string;
  size: string;
  path: string;
  project?: Types.ObjectId | IProject;
  _id?: Types.ObjectId;
}

// 2. Create a Schema corresponding to the document interface.
const floorPlanSchema = new Schema<IFloorPlan>({
  filename: { type: String, required: true },
  type: { type: String, required: true },
  size: { type: String, required: true },
  path: { type: String, required: true },
  project: { type: Schema.Types.ObjectId, ref: "Projects", required: true },
});

// 3. Create a Model.
const FloorPlan =
  mongoose.models.FloorPlans ??
  mongoose.model<IFloorPlan>("FloorPlans", floorPlanSchema);

export default FloorPlan;
