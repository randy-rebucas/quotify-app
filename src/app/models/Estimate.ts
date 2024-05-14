import mongoose, { Schema, Types } from "mongoose";
import { IProject } from "./Project";

// 1. Create an interface representing a document in MongoDB.
export interface IEstimate {
  name: string;
  section: string;
  project?: Types.ObjectId | IProject;
}

// 2. Create a Schema corresponding to the document interface.
const estimateSchema = new Schema<IEstimate>({
  name: { type: String, required: true },
  section: { type: String, required: true },
  project: { type: Schema.Types.ObjectId, ref: "Projects", required: true },
});

// 3. Create a Model.
const Estimate =
  mongoose.models.Estimates ??
  mongoose.model<IEstimate>("Estimates", estimateSchema);

export default Estimate;
