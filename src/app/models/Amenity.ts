import mongoose, { Schema, Types } from "mongoose";

// 1. Create an interface representing a document in MongoDB.
export interface IAmenity {
  _id: string;
  amenityName: string;
}

// 2. Create a Schema corresponding to the document interface.
const amenitySchema = new Schema<IAmenity>({
  _id: { type: String, required: true },
  amenityName: { type: String, unique: true, required: true }
});


// 3. Create a Model.
const Amenity =
  mongoose.models.Amenities ??
  mongoose.model<IAmenity>("Amenities", amenitySchema);

export default Amenity;
