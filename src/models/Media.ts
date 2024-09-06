import mongoose, { Schema, Types } from "mongoose";
import { IUser } from "./User";

type MetaData = {
  title: string;
  alternativeText: string;
};
// 1. Create an interface representing a document in MongoDB.
export interface IMedia {
  uploadedDate: Date;
  uploadedBy: Types.ObjectId | IUser;
  fileName: string;
  fileType: string;
  fileSize: string;
  metaData?: MetaData;
  _id?: Types.ObjectId;
}

// 2. Create a Schema corresponding to the document interface.
const mediaSchema = new Schema<IMedia>({
  metaData: {
    title: { type: String },
    alternativeText: { type: String },
  },
  uploadedDate: { type: Date, default: Date.now },
  uploadedBy: { type: Schema.Types.ObjectId, ref: "Users", required: true },
  fileName: { type: String, required: true },
  fileType: { type: String, required: true },
  fileSize: { type: String, required: true },
});

// 3. Create a Model.
const Media =
  mongoose.models.Medias ?? mongoose.model<IMedia>("Medias", mediaSchema);

export default Media;
