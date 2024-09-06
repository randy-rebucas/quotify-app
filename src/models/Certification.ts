import mongoose, { Schema, Types } from "mongoose";
import { IOffice } from "./Office";

// 1. Create an interface representing a document in MongoDB.
export interface ICertification {
  name: string;
  status: number;
  office?: Types.ObjectId | IOffice;
}

// 2. Create a Schema corresponding to the document interface.
const certificationSchema = new Schema<ICertification>({
  name: { type: String, unique: true, required: true },
  status: { type: Number, default: 1 },
  office: { type: Schema.Types.ObjectId, ref: "Offices", required: true },
});

// 3. Create a Model.
const Certification =
  mongoose.models.Certifications ??
  mongoose.model<ICertification>("Certifications", certificationSchema);

export default Certification;
