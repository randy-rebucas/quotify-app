import mongoose, { Schema, Types } from "mongoose";

// 1. Create an interface representing a document in MongoDB.
export interface IMenu {
  _id: string;
  title: string;
  pageHandled: string;
}

// 2. Create a Schema corresponding to the document interface.
const menuSchema = new Schema<IMenu>({
  _id: { type: String, required: true },
  title: { type: String, required: true },
  pageHandled: { type: String, required: true }
});

// 3. Create a Model.
const Menu =
  mongoose.models.Menus ?? mongoose.model<IMenu>("Menus", menuSchema);

export default Menu;
