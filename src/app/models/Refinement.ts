import mongoose, { Schema } from "mongoose";

// 1. Create an interface representing a document in MongoDB.
export interface IRefinement {
  name: string;
}

// 2. Create a Schema corresponding to the document interface.
const refinementSchema = new Schema<IRefinement>({
  name: { type: String, required: true }
});

// 3. Create a Model.
const Refinement =
  mongoose.models.Refinements ?? mongoose.model<IRefinement>("Refinements", refinementSchema);

export default Refinement;