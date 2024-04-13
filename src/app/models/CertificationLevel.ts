import mongoose, { Schema, Types } from "mongoose";
import { ICertification } from "./Certification";

// 1. Create an interface representing a document in MongoDB.
export interface ICertificationLevel {
  name: string;
  thumbnail: string;
  description: string;
  costPerSqft: Types.Decimal128;
  status: number;
  certification?: Types.ObjectId | ICertification;
}

// 2. Create a Schema corresponding to the document interface.
const certificationLevelSchema = new Schema<ICertificationLevel>({
  name: { type: String, required: true },
  thumbnail: { type: String },
  description: { type: String },
  costPerSqft: { type: Schema.Types.Decimal128 },
  status: { type: Number, default: 1 },
  certification: {
    type: Schema.Types.ObjectId,
    ref: "Certifications",
    required: true,
  },
});

// 3. Create a Model.
const CertificationLevel =
  mongoose.models.CertificationLevels ??
  mongoose.model<ICertificationLevel>(
    "CertificationLevels",
    certificationLevelSchema
  );

export default CertificationLevel;
