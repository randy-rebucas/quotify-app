import mongoose, { Schema, Types } from "mongoose";
import { ICustomSpace } from "./CustomSpace";
import { IProject } from "./Project";

// 1. Create an interface representing a document in MongoDB.
export interface IProjectCustomSpace {
    quantity: number;
    customSpace?: Types.ObjectId | ICustomSpace;
    project?: Types.ObjectId | IProject;
}

// 2. Create a Schema corresponding to the document interface.
const projectCustomSpaceSchema = new Schema<IProjectCustomSpace>({
    quantity: { type: Number },
    customSpace: { type: Schema.Types.ObjectId, ref: 'CustomSpaces', required: true },
    project: { type: Schema.Types.ObjectId, ref: 'Projects', required: true },
});

// 3. Create a Model.
const ProjectCustomSpace =
  mongoose.models.ProjectCustomSpaces ??
  mongoose.model<IProjectCustomSpace>("ProjectCustomSpaces", projectCustomSpaceSchema);

export default ProjectCustomSpace;
