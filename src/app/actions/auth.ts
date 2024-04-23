"use server";

import {
  SignupFormSchema,
  FormState,
  LoginFormSchema,
} from "@/app/lib/definitions";
import connect from "../utils/db";
import Auth from "../models/Auth";
import User from "../models/User";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";
import { revalidatePath, unstable_noStore } from "next/cache";
import { createSession, deleteSession } from "./session";

export async function signup(state: FormState, formData: FormData) {
  unstable_noStore;
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

  // Call the provider or db to create a user...
  connect();

  let authCheck = await Auth.findOne({ email }).exec();

  if (authCheck) {
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

  const user = new User({
    name: "sample",
    email: email,
    auth: authResponse._id,
  });
  let userResponse = await user.save();

  if (!userResponse) {
    return {
      message: "An error occurred while creating your account.",
    };
  }

  // TODO:
  // 4. Create user session
  await createSession(userResponse._id);

  // 5. Redirect user
  revalidatePath("/");
  redirect("/");
}

export async function login(state: FormState, formData: FormData) {
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

  createSession(user._id);
  redirect("/file-management");
}

export async function logout() {
  deleteSession();
  redirect("/login");
}