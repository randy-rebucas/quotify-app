"use server";

import {
  SignupFormSchema,
  AuthFormState,
} from "@/app/lib/definitions";
import connect from "../utils/db";
import Auth from "../models/Auth";
import User from "../models/User";
import Office from "../models/Office";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";
import { revalidatePath, unstable_noStore as noStore } from "next/cache";
import { isRedirectError } from "next/dist/client/components/redirect";
import { signIn } from "../../../auth";
import { AuthError } from "next-auth";

export async function signup(state: AuthFormState, formData: FormData) {
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

    let authCheck = await Auth.find({}).exec();

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
      roles: authCheck.length === 1 ? "admin" : "user",
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

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}
