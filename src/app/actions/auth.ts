"use server";

import {
  SignupFormSchema,
  LoginFormState,
  LoginFormSchema,
  SignupFormState,
} from "@/app/lib/definitions";
import connect from "../utils/db";
import Auth from "../models/Auth";
import User from "../models/User";
import Office from "../models/Office";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";
import { revalidatePath, unstable_noStore as noStore } from "next/cache";
import { isRedirectError } from "next/dist/client/components/redirect";
import { createSession, deleteSession } from "./session";

export async function signup(state: SignupFormState, formData: FormData) {
  noStore;
  // Validate form fields
  const validatedFields = SignupFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
    confirm_password: formData.get("confirm_password"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email, password } = validatedFields.data;

  try {
    // Call the provider or db to create a user...
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
    // 5. Redirect user
    revalidatePath("/");
    redirect("/");
  } catch (error) {
    if (isRedirectError(error)) {
      // Redirect error handle here
      throw error; // You have to throw the redirect error
    } else {
      console.log("other error");
    }
    return;
  }
}

export async function login(state: LoginFormState, formData: FormData) {
  const validatedFields = LoginFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email, password } = validatedFields.data;
  try {
    connect();

    let auth = await Auth.findOne({ email }).exec();

    if (!auth) {
      return {
        message: "Email not exists, Please register.",
      };
    }
    let decrypted = await bcrypt.compare(password, auth.password);
    if (!decrypted) {
      return {
        message: "Something went wrong. Incorrect password!",
      };
    }
    let user = await User.findOne({ email }).exec();

    if (!user) {
      return {
        message: "Something went wrong. Cannot find email: " + email + " list!",
      };
    }

    await createSession(user._id.toString());

    revalidatePath("/file-management");
    redirect("/file-management");
  } catch (error) {
    if (isRedirectError(error)) {
      // Redirect error handle here
      throw error; // You have to throw the redirect error
    } else {
      console.log("other error");
    }
    return;
  }
}

export async function logout() {
  deleteSession();
  redirect("/login");
}
