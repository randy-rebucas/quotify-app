import mongoose, { Schema, Types } from "mongoose";
import { IAmenityCategory } from "./AmenityCategory";

// 1. Create an interface representing a document in MongoDB.
export interface IAmenity {
  amenityName: string;
  category?: Types.ObjectId | IAmenityCategory;
  _id?: Types.ObjectId;
}

// 2. Create a Schema corresponding to the document interface.
const amenitySchema = new Schema<IAmenity>({
  amenityName: { type: String, unique: true, required: true },
  category: { type: Schema.Types.ObjectId, ref: "AmenityCategories", required: true },
});


// 3. Create a Model.
const Amenity =
  mongoose.models.Amenities ??
  mongoose.model<IAmenity>("Amenities", amenitySchema);

export default Amenity;
