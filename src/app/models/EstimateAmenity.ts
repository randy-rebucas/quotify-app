import mongoose, { Schema, Types } from "mongoose";
import { IEstimate } from "./Estimate";
import { IAmenity } from "./Amenity";

// 1. Create an interface representing a document in MongoDB.
export interface IEstimateAmenity {
  quantity: number;
  estimate?: Types.ObjectId | IEstimate;
  amenity?: Types.ObjectId | IAmenity;
  // amenities?: [Types.ObjectId | IAmenity];
}

// 2. Create a Schema corresponding to the document interface.
const estimateAmenitySchema = new Schema<IEstimateAmenity>({
  quantity: { type: Number },
  estimate: {
    type: Schema.Types.ObjectId,
    ref: "Estimates",
    required: true,
  },
  amenity: {
    type: Schema.Types.ObjectId,
    ref: "Amenities",
    required: true,
  },
  // amenities: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "Amenities",
  //   },
  // ],
});

// 3. Create a Model.
const EstimateAmenity =
  mongoose.models.EstimateAmenities ??
  mongoose.model<IEstimateAmenity>("EstimateAmenities", estimateAmenitySchema);

export default EstimateAmenity;
