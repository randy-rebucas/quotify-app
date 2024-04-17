"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import Auth, { IAuth } from "./models/Auth";
import bcrypt from "bcrypt";
import { connect } from "mongoose";
import User, { IUser } from "./models/User";
import { unstable_noStore as noStore } from "next/cache";
import clientPromise from "./lib/db";

const schema = z
  .object({
    email: z.string({
      invalid_type_error: "Invalid Email",
    }),
    password: z.string({
      invalid_type_error: "Enter password.",
    }),
    confirm_password: z.string({
      invalid_type_error: "Enter confirm password.",
    }),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords don't match",
    path: ["confirm_password"],
  });

export default async function createUser(prevState: any, formData: FormData) {
  noStore();

  const validatedFields = schema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
    confirm_password: formData.get("confirm_password"),
  });

  // Return early if the form data is invalid
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email, password } = validatedFields.data;

  try {
    const client = await clientPromise;
    const db = client.db();

    const authCheck = await db.collection<IAuth>("auths").findOne({ email });

    if (authCheck) {
      throw new Error("Something went wrong. Email is in used!");
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const authResponse = await db.collection<IAuth>("auths").insertOne({
      email,
      password: hash,
    });

    const userResponse = await db.collection<IUser>("users").insertOne({
      auth: authResponse.insertedId,
      email: email,
      name: "",
    });

    return userResponse;
    // Revalidate the cache for the invoices page and redirect the user.
  } catch (error: any) {
    // If a database error occurs, return a more specific error.
    return {
      message: error.message,
    };
  }

  // revalidatePath("/dashboard/invoices");
  // redirect("/dashboard/invoices");
}
