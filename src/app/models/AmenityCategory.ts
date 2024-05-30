import mongoose, { Schema, Types } from "mongoose";

// 1. Create an interface representing a document in MongoDB.
export interface IAmenityCategory {
  name: string;
  _id?: Types.ObjectId;
}

// 2. Create a Schema corresponding to the document interface.
const amenityCategorySchema = new Schema<IAmenityCategory>({
    name: { type: String, unique: true, required: true }
});


// 3. Create a Model.
const AmenityCategory =
  mongoose.models.AmenityCategories ??
  mongoose.model<IAmenityCategory>("AmenityCategories", amenityCategorySchema);

export default AmenityCategory;
