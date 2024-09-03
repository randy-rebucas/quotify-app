import Auth from "@/app/models/Auth";
import Office from "@/app/models/Office";
import User from "@/app/models/User";
import connect from "@/app/utils/db";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    // validate
    console.log({ email, password });

    connect();

    let authCheckEmail = await Auth.findOne({ email }).exec();

    if (authCheckEmail) {
      return {
        message: "Email already exists, please login or use a different email.",
      };
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const auth = new Auth({
      email: email,
      password: hash,
    });
    let authResponse = await auth.save();

    const office = await Office.findOne({ status: 1 }).limit(1).exec();

    const userData = {
      name: "sample",
      email: email,
      auth: authResponse._id,
      roles: "user",
    };

    let optional = {};
    if (office) {
      optional = {
        office: office?._id,
      };
    }

    const transformUser = {
      ...userData,
      ...optional,
    };

    const user = new User(transformUser);

    let userResponse = await user.save();

    if (!userResponse) {
      return {
        message: "An error occurred while creating your account.",
      };
    }
  } catch (error) {
    console.log(error);
  }
}
