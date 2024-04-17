"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import Auth from "./models/Auth";
import bcrypt from "bcrypt";
import User from "./models/User";
import { unstable_noStore as noStore } from "next/cache";
import { connect } from "mongoose";
// import connect from "./utils/db";


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
  // console.log(process.env.MONGODB_URI);

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
    await connect('mongodb+srv://vercel-admin-user:MVyaozWTBHlGpQgk@main.c8cxmly.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

    let authCheck = await Auth.findOne({ email });
  
    if (authCheck) {
      throw new Error("Something went wrong. Email is in used!" );
    }
  
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const authCredentials = new Auth({
      email,
      password: hash,
    });
    let auth = await authCredentials.save();

    const newUser = new User({
      email,
      auth: auth._id,
      name: "",
    });
    let user = await newUser.save();

    return user;
    // Revalidate the cache for the invoices page and redirect the user.
  } catch (error: any) {
    // If a database error occurs, return a more specific error.
    return new Error(error);
  }

  // revalidatePath("/dashboard/invoices");
  // redirect("/dashboard/invoices");
}
