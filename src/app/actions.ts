"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import Auth from "./models/Auth";
import bcrypt from "bcrypt";

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

  console.log(email);
  try {
    let authCheck = await Auth.findOne({ email: email });
    console.log(authCheck);
    if (authCheck) {
      throw new Error("Something went wrong. Email is in used!");
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const authCredentials = new Auth({
      email: email,
      password: hash,
    });
    let auth = await authCredentials.save();
    console.log(auth);
    return auth;
  } catch (error) {
    // If a database error occurs, return a more specific error.
    return {
      message: "Database Error: Failed to Create Invoice.",
    };
  }

  //   // Revalidate the cache for the invoices page and redirect the user.
  revalidatePath("/dashboard/invoices");
  redirect("/dashboard/invoices");
}
