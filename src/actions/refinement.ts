"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import {
    RefinementFormSchema,
    RefinementFormState
} from "@/app/lib/definitions";
import Refinement from "@/models/Refinement";


const UpdateRefinement = RefinementFormSchema.omit({ id: true });

export async function updateRefinement(
  id: string,
  prevState: RefinementFormState,
  formData: FormData
) {
  const validatedFields = UpdateRefinement.safeParse({
    name: formData.get("name")
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name } = validatedFields.data;

  try {
    const update = { name: name };
    const filter = { _id: id };

    await Refinement.findOneAndUpdate(filter, update);

  } catch (error) {
    return { message: "Database Error: Failed to Update refinement." };
  }

  revalidatePath("/setting/refinements");
  redirect("/setting/refinements");
}

const CreateRefinement = RefinementFormSchema.omit({ id: true });

export async function createRefinement(prevState: RefinementFormState, formData: FormData) {
   
  // Validate form using Zod
  const validatedFields = CreateRefinement.safeParse({
    name: formData.get("name")
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name } = validatedFields.data;

  const refinement = new Refinement({
    name: name
  });
  await refinement.save();

  // Revalidate the cache for the invoices page and redirect the user.
  revalidatePath("/setting/refinements");
  redirect("/setting/refinements");
}

export async function deleteRefinement(id: string) {
  try {
    await Refinement.findOneAndDelete({ _id: id }).exec();
    revalidatePath("/setting/refinements");
    return { message: "Deleted Refinement." };
  } catch (error) {
    return { message: "Database Error: Failed to Delete Refinement." };
  }
}
