"use server";

import { z } from "zod";
import User from "../models/User";
import { redirect } from "next/navigation";
import { revalidatePath, unstable_noStore as noStore } from "next/cache";
import Auth from "../models/Auth";

const FormSchema = z.object({
  id: z.string(),
  email: z.string({
    invalid_type_error: "Please select a email.",
  }),
});

const UpdateUser = FormSchema.omit({ id: true });

export type UserFormState =
  | {
      errors?: {
        email?: string[];
      };
      message?: string;
    }
  | undefined;

export async function updateUser(
  id: string,
  prevState: UserFormState,
  formData: FormData
) {
  noStore;
  console.log(id);
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
    const filterUser = { _id: id };

    const update = { email: email };

    let user = await User.findOneAndUpdate(filterUser, update);
    console.log(user.auth._id);
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
    const users = await User.findOneAndDelete({ _id: id }).exec();
    revalidatePath("/setting/users");
    return { message: "Deleted User." };
  } catch (error) {
    return { message: "Database Error: Failed to Delete User." };
  }
}
