"use server";

import CustomSpace from "../../models/CustomSpace";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import {
  CustomSpaceFormSchema,
  CustomSpaceFormState,
} from "@/app/lib/definitions";

const CustomSpaceSchema = CustomSpaceFormSchema.omit({ id: true });

export async function updateCustomSpace(
  id: string,
  prevState: CustomSpaceFormState,
  formData: FormData
) {
  const validatedFields = CustomSpaceSchema.safeParse({
    custom_space_name: formData.get("custom_space_name"),
    custom_space_group_name: formData.get("custom_space_group_name"),
    capacity: formData.get("capacity"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { custom_space_name, custom_space_group_name, capacity } =
    validatedFields.data;

  const update = {
    customSpaceName: custom_space_name,
    customSpaceGroupName: custom_space_group_name,
    capacity: capacity,
  };

  const filterAmenity = { _id: id };
  await CustomSpace.findOneAndUpdate(filterAmenity, update);

  revalidatePath("/setting/custom-spaces");
  redirect("/setting/custom-spaces");
}

export async function createCustomSpace(
  prevState: CustomSpaceFormState,
  formData: FormData
) {
  // Validate form using Zod
  const validatedFields = CustomSpaceSchema.safeParse({
    custom_space_name: formData.get("custom_space_name"),
    custom_space_group_name: formData.get("custom_space_group_name"),
    capacity: formData.get("capacity"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { custom_space_name, custom_space_group_name, capacity } =
    validatedFields.data;

  const custom_space = new CustomSpace({
    customSpaceName: custom_space_name,
    customSpaceGroupName: custom_space_group_name,
    capacity: capacity,
  });
  await custom_space.save();

  // Revalidate the cache for the invoices page and redirect the user.
  revalidatePath("/setting/custom-spaces");
  redirect("/setting/custom-spaces");
}

export async function deleteCustomSpace(id: string) {
  try {
    await CustomSpace.findOneAndDelete({ _id: id }).exec();
    revalidatePath("/setting/custom-spaces");
    return { message: "Deleted Custom Space." };
  } catch (error) {
    return { message: "Database Error: Failed to Delete Custom Space." };
  }
}
