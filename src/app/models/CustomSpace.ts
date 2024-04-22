import mongoose, { Schema } from "mongoose";

// 1. Create an interface representing a document in MongoDB.
export interface ICustomSpace {
  _id: string;
  customSpaceName: string;
  // extra 
  customSpaceGroupName?: string;
  capacity?: string;
  spaces?: any
}

// 2. Create a Schema corresponding to the document interface.
const customSpaceSchema = new Schema<ICustomSpace>({
  _id: { type: String, required: true },
  customSpaceName: { type: String, unique: true, required: true },
  // extra 
  customSpaceGroupName: { type: String },
  capacity: { type: String },
});

// 3. Create a Model.
const CustomSpace =
  mongoose.models.CustomSpaces ??
  mongoose.model<ICustomSpace>("CustomSpaces", customSpaceSchema);

export default CustomSpace;
