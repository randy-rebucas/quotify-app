import mongoose, { Schema, Types } from "mongoose";
import { IUser } from "./User";

const getSpaceSize = (value: any) => {
  if (typeof value !== "undefined") {
    return parseFloat(value.toString());
  }
  return value;
};

const getSeatingPercentage = (value: any) => {
  if (typeof value !== "undefined") {
    return parseFloat(value.toString());
  }
  return value;
};

const getRentableArea = (value: any) => {
  if (typeof value !== "undefined") {
    return parseFloat(value.toString());
  }
  return value;
};

// 1. Create an interface representing a document in MongoDB.
export interface IProject {
  spaceName: string;
  spaceSize: any;
  rentableArea: any;
  headCount: string;
  averageOfficeAttendance: string;
  seatingPercentage: any;
  isCompleted: boolean;
  user: Types.ObjectId | IUser;
  lastUri: string;
  createdAt: Date;
  updatedAt?: Date;
  address?: string;
  _id?: Types.ObjectId;
}

// 2. Create a Schema corresponding to the document interface.
const projectSchema = new Schema<IProject>(
  {
    spaceName: { type: String, unique: true, required: true },
    address: { type: String },
    spaceSize: {
      type: Schema.Types.Decimal128,
      required: true,
      get: getSpaceSize,
    },
    rentableArea: {
      type: Schema.Types.Decimal128,
      required: true,
      get: getRentableArea,
    },
    headCount: { type: String, required: true }, // headcount
    averageOfficeAttendance: { type: String, required: true },
    seatingPercentage: {
      type: Schema.Types.Decimal128,
      required: true,
      get: getSeatingPercentage,
    },
    isCompleted: { type: Schema.Types.Boolean, default: false },
    lastUri: { type: String },
    user: { type: Schema.Types.ObjectId, ref: "Users", required: true },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
    },
  },
  { toJSON: { getters: true} }
);
// const virtualWorkspace = projectSchema.virtual("workspace");
// virtualWorkspace.get(function () {
//   return +this.seatingPercentage;
// });

// const virtualId = projectSchema.virtual("id");
// virtualId.get(function () {
//   return this._id;
// });

// projectSchema.set("toJSON", {
//   virtuals: true,
//   versionKey: false,
//   transform: function (doc, dataInMongoDb) {
//     delete dataInMongoDb._id;
//   },
// });
// workspaceAssigned: seatingPercentage,
// staffWorkRemotely: 100 - seatingPercentage,

// 3. Create a Model.
const Project =
  mongoose.models.Projects ??
  mongoose.model<IProject>("Projects", projectSchema);

export default Project;
