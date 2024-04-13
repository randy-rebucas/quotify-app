import mongoose, { Schema, Types } from "mongoose";
import { IEstimate } from "./Estimate";
import { ICertificationLevel } from "./CertificationLevel";

// 1. Create an interface representing a document in MongoDB.
export interface IEstimateCertificationLevel {
  estimate?: Types.ObjectId | IEstimate;
  certificationLevel?: Types.ObjectId | ICertificationLevel;
}

// 2. Create a Schema corresponding to the document interface.
const estimateCertificationLevelSchema =
  new Schema<IEstimateCertificationLevel>({
    estimate: {
      type: Schema.Types.ObjectId,
      ref: "Estimates",
      required: true,
    },
    certificationLevel: {
      type: Schema.Types.ObjectId,
      ref: "CertificationLevels",
      required: true,
    },
  });

// 3. Create a Model.
const EstimateCertificationLevel =
  mongoose.models.EstimateCertificationLevels ??
  mongoose.model<IEstimateCertificationLevel>(
    "EstimateCertificationLevels",
    estimateCertificationLevelSchema
  );

export default EstimateCertificationLevel;
