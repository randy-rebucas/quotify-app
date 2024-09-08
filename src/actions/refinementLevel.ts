"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import {
  RefinementLevelFormSchema,
  RefinementLevelFormState,
} from "@/lib/definitions";
import RefinementLevel from "@/models/RefinementLevel";
import { unlink, writeFile } from "fs/promises";
import path from "path";

const UpdateSchema = RefinementLevelFormSchema.omit({ id: true });

export async function updateRefinementLevel(
  id: string,
  prevState: RefinementLevelFormState,
  formData: FormData
) {
  const validatedFields = UpdateSchema.safeParse({
    level: formData.get("level"),
    unitRate: formData.get("unitRate"),
    description: formData.get("description"),
    image: formData.get("image"),
    refinementId: formData.get("refinementId"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { level, unitRate, description, image, refinementId } =
    validatedFields.data;

  try {
    const update = {
      level: level,
      unitRate: Number(unitRate).toLocaleString(),
      description: description,
      image: image,
      refinement: refinementId,
    };
    const filter = { _id: id };

    await RefinementLevel.findOneAndUpdate(filter, update);
  } catch (error) {
    return { message: "Database Error: Failed to Update refinement." };
  }

  revalidatePath("/setting/refinement-levels");
  redirect("/setting/refinement-levels");
}

const CreateSchema = RefinementLevelFormSchema.omit({ id: true });

export async function createRefinementLevel(
  prevState: RefinementLevelFormState,
  formData: FormData
) {
  // Validate form using Zod
  const validatedFields = CreateSchema.safeParse({
    level: formData.get("level"),
    unitRate: formData.get("unitRate"),
    description: formData.get("description"),
    image: formData.get("image"),
    refinementId: formData.get("refinementId"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { level, unitRate, description, image, refinementId } =
    validatedFields.data;

  const refinementLevel = new RefinementLevel({
    level: level,
    unitRate: Number(unitRate).toLocaleString(),
    description: description,
    image: image,
    refinement: refinementId,
  });
  await refinementLevel.save();

  revalidatePath("/setting/refinement-levels");
  redirect("/setting/refinement-levels");
}

export async function deleteRefinementLevel(id: string) {
  try {
    let refinementLevel = await RefinementLevel.findOne({ _id: id }).populate('image').exec();
    let filename = refinementLevel.image.fileName;
    
    await unlink(path.join(process.cwd(), "public/uploads/" + filename));

    await RefinementLevel.findOneAndDelete({ _id: id }).exec();
    revalidatePath("/setting/refinement-levels");
    return { message: "Deleted Refinement level." };
  } catch (error) {
    return { message: "Database Error: Failed to Delete Refinement." };
  }
}
