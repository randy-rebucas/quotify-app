"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import {
    RequiermentLevelFormState,
  RequirementLevelFormSchema,
} from "@/app/lib/definitions";
import RefinementLevel from "@/models/RefinementLevel";
import { unlink, writeFile } from "fs/promises";
import path from "path";
import RequirementLevel from "@/models/RequirementLevel";

const UpdateSchema = RequirementLevelFormSchema.omit({ id: true });

export async function updateRequirementLevel(
  id: string,
  prevState: RequiermentLevelFormState,
  formData: FormData
) {
  const validatedFields = UpdateSchema.safeParse({
    level: formData.get("level"),
    unitRate: formData.get("unitRate"),
    description: formData.get("description"),
    image: formData.get("image"),
    requirementId: formData.get("requirementId"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { level, unitRate, description, image, requirementId } =
    validatedFields.data;

  try {
    const update = {
      level: level,
      unitRate: Number(unitRate).toLocaleString(),
      description: description,
      image: image,
      requirement: requirementId,
    };
    const filter = { _id: id };

    await RequirementLevel.findOneAndUpdate(filter, update);
  } catch (error) {
    return { message: "Database Error: Failed to Update refinement." };
  }

  revalidatePath("/setting/requirement-levels");
  redirect("/setting/requirement-levels");
}

const CreateSchema = RequirementLevelFormSchema.omit({ id: true });

export async function createRequirementLevel(
  prevState: RequiermentLevelFormState,
  formData: FormData
) {
  // Validate form using Zod
  const validatedFields = CreateSchema.safeParse({
    level: formData.get("level"),
    unitRate: formData.get("unitRate"),
    description: formData.get("description"),
    image: formData.get("image"),
    requirementId: formData.get("requirementId"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { level, unitRate, description, image, requirementId } =
    validatedFields.data;

  const requirementLevel = new RequirementLevel({
    level: level,
    unitRate: Number(unitRate).toLocaleString(),
    description: description,
    image: image,
    requirement: requirementId,
  });
  await requirementLevel.save();

  revalidatePath("/setting/requirement-levels");
  redirect("/setting/requirement-levels");
}

export async function deleteRequirementLevel(id: string) {
  try {
    let requirementLevel = await RequirementLevel.findOne({ _id: id }).populate('image').exec();
    let filename = requirementLevel.image.fileName;

    await unlink(path.join(process.cwd(), "public/uploads/" + filename));

    await RequirementLevel.findOneAndDelete({ _id: id }).exec();
    revalidatePath("/setting/requirement-levels");
    return { message: "Deleted requirement level." };
  } catch (error) {
    return { message: "Database Error: Failed to Delete requirement." };
  }
}
