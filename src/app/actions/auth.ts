"use server";

import { SignupFormSchema, FormState } from "@/app/lib/definitions";
import connect from "../utils/db";
import Auth from "../models/Auth";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";
import { revalidatePath, unstable_noStore } from "next/cache";
import User from "../models/User";

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

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const auth = new Auth({
    email: email,
    password: hash,
  });
  let authResponse = await auth.save();

  const user = new User({
    name: 'sample',
    email: email,
    auth: authResponse._id,
  });
  let userResponse = await user.save();
  console.log(userResponse);

  revalidatePath("/");
  redirect("/");
}
