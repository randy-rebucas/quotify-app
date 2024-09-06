import mongoose, { Schema } from "mongoose";

// 1. Create an interface representing a document in MongoDB.
export interface IOffice {
  location: string;
  status: number;
}

// 2. Create a Schema corresponding to the document interface.
const officeSchema = new Schema<IOffice>({
  location: { type: String, required: true },
  status: { type: Number, default: 1 },
});

// 3. Create a Model.
const Office =
  mongoose.models.Offices ?? mongoose.model<IOffice>("Offices", officeSchema);

export default Office;
