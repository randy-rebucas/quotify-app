import mongoose, { Schema, Types } from "mongoose";

// 1. Create an interface representing a document in MongoDB.
export interface IMenu {
  title: string;
  pageHandled: string;
  _id?: Types.ObjectId;
}

// 2. Create a Schema corresponding to the document interface.
const menuSchema = new Schema<IMenu>({
  title: { type: String, required: true },
  pageHandled: { type: String, required: true },
  _id: String
});

// 3. Create a Model.
const Menu =
  mongoose.models.Menus ?? mongoose.model<IMenu>("Menus", menuSchema);

export default Menu;
