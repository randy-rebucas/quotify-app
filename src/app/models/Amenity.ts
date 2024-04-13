import mongoose, { Schema } from "mongoose";

// 1. Create an interface representing a document in MongoDB.
export interface IAmenity {
  amenityName: string;
}

// 2. Create a Schema corresponding to the document interface.
const amenitySchema = new Schema<IAmenity>({
  amenityName: { type: String, unique: true, required: true },
});

// 3. Create a Model.
const Amenity =
  mongoose.models.Amenities ??
  mongoose.model<IAmenity>("Amenities", amenitySchema);

export default Amenity;
