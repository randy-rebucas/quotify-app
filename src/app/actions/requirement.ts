"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import {
  RequirementFormSchema,
  RequirementFormState,
} from "@/app/lib/definitions";
import Requirement from "../models/Requirement";

const UpdateRequirement = RequirementFormSchema.omit({ id: true });

export async function updateRequirement(
  id: string,
  prevState: RequirementFormState,
  formData: FormData
) {
  const validatedFields = UpdateRequirement.safeParse({
    name: formData.get("name"),
    group_name: formData.get("group_name"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, group_name } = validatedFields.data;

  try {
    const update = { name: name, groupName: group_name };
    const filter = { _id: id };

    await Requirement.findOneAndUpdate(filter, update);
  } catch (error) {
    return { message: "Database Error: Failed to Update requirement." };
  }

  revalidatePath("/setting/requirements");
  redirect("/setting/requirements");
}

const CreateARequiremnt = RequirementFormSchema.omit({ id: true });

export async function createRequirement(
  prevState: RequirementFormState,
  formData: FormData
) {
  // Validate form using Zod
  const validatedFields = CreateARequiremnt.safeParse({
    name: formData.get("name"),
    group_name: formData.get("group_name"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, group_name } = validatedFields.data;

  const requirement = new Requirement({
    name: name,
    groupName: group_name,
  });
  await requirement.save();

  // Revalidate the cache for the invoices page and redirect the user.
  revalidatePath("/setting/requirements");
  redirect("/setting/requirements");
}

export async function deleteRequirement(id: string) {
  try {
    await Requirement.findOneAndDelete({ _id: id }).exec();
    revalidatePath("/setting/requirements");
    return { message: "Deleted Amenity Requirement." };
  } catch (error) {
    return { message: "Database Error: Failed to Delete Amenity Requirement." };
  }
}
