"use server";

import User from "../models/User";
import Auth from "../models/Auth";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { UserFormSchema, UserFormState } from "./definitions";

const UpdateUser = UserFormSchema.omit({ id: true });

export async function updateUser(
  id: string,
  prevState: UserFormState,
  formData: FormData
) {

  const validatedFields = UpdateUser.safeParse({
    email: formData.get("email"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email } = validatedFields.data;

  try {
    const update = { email: email };

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

export async function deleteUser(id: string) {
  try {
    await User.findOneAndDelete({ _id: id }).exec();
    revalidatePath("/setting/users");
    return { message: "Deleted User." };
  } catch (error) {
    return { message: "Database Error: Failed to Delete User." };
  }
}
