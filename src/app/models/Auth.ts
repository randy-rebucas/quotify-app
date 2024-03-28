import { Schema, Types, model } from "mongoose";
import bcrypt from "bcryptjs";

// 1. Create an interface representing a document in MongoDB.
interface IAuth {
  name: string;
  email: string;
  password: string;
  providers: Types.Array<string>;
  loggedAt: Date;
}

// 2. Create a Schema corresponding to the document interface.
const authSchema = new Schema<IAuth>({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
    index: true,
  },
  password: {
    type: String,
    required: true,
  },
  providers: [String],
  loggedAt: {
    type: Date,
    default: null,
  },
});

authSchema.pre('save', function (next) {
    if (this.isModified('password')) {
        bcrypt.hash(this.password, 10).then((password) => {
            this.password = password;
        })
    }
    next();
});

authSchema.methods.comparePassword = function (password: string) {
    return bcrypt.compare(password, this.password);
};

// 3. Create a Model.
const Auth = model<IAuth>("Auth", authSchema);

export default Auth;