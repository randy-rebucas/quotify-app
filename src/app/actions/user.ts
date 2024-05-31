"use server";

import User from "../models/User";
import Auth from "../models/Auth";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import bcrypt from "bcrypt";
import {
  AuthFormState,
  EditUserFormSchema,
  SignupFormSchema,
  UserFormSchema,
  UserFormState,
} from "@/app/lib/definitions";

const UpdateUser = EditUserFormSchema.omit({ id: true });

export async function updateUser(
  id: string,
  prevState: UserFormState,
  formData: FormData
) {
  const validatedFields = UpdateUser.safeParse({
    email: formData.get("email"),
    officeId: formData.get("officeId"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email, officeId } = validatedFields.data;

  try {
    const update = { email: email, office: officeId };

    const filterUser = { _id: id };
    let user = await User.findOneAndUpdate(filterUser, update);

    const filterAuth = { _id: user.auth._id };
    await Auth.findOneAndUpdate(filterAuth, update);
  } catch (error) {
    return { message: "Database Error: Failed to Update Invoice." };
  }

  revalidatePath("/setting/users");
  redirect("/setting/users");
}

const CreateUser = UserFormSchema.omit({ id: true });

export async function createUser(prevState: AuthFormState, formData: FormData) {
  // Validate form using Zod
  const validatedFields = CreateUser.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
    confirm_password: formData.get("confirm_password"),
    officeId: formData.get("officeId"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email, password, officeId } = validatedFields.data;

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

  const user = new User({
    name: "sample",
    email: email,
    auth: authResponse._id,
    roles: authCheck.length === 1 ? "admin" : "user",
    office: officeId,
  });
  let userResponse = await user.save();

  if (!userResponse) {
    return {
      message: "An error occurred while creating your account.",
    };
  }

  // Revalidate the cache for the invoices page and redirect the user.
  revalidatePath("/setting/users");
  redirect("/setting/users");
}

export async function deleteUser(id: string) {
  try {
    await User.findOneAndDelete({ _id: id }).exec();
    revalidatePath("/setting/users");
    return { message: "Deleted User." };
  } catch (error) {
    return { message: "Database Error: Failed to Delete User." };
  }
}
