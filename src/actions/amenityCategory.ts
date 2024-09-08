"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import {
    AmenityCategoryFormSchema,
    AmenityCategoryFormState,
} from "@/lib/definitions";
import AmenityCategory from "@/models/AmenityCategory";

const UpdateAmenityCategory = AmenityCategoryFormSchema.omit({ id: true });

export async function updateAmenityCategory(
  id: string,
  prevState: AmenityCategoryFormState,
  formData: FormData
) {
  const validatedFields = UpdateAmenityCategory.safeParse({
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

    const filterAmenityCategory = { _id: id };
    await AmenityCategory.findOneAndUpdate(filterAmenityCategory, update);

  } catch (error) {
    return { message: "Database Error: Failed to Update Amenity Category." };
  }

  revalidatePath("/setting/amenity-categories");
  redirect("/setting/amenity-categories");
}

const CreateAmenityCategory = AmenityCategoryFormSchema.omit({ id: true });

export async function createAmenityCategory(prevState: AmenityCategoryFormState, formData: FormData) {
   
  // Validate form using Zod
  const validatedFields = CreateAmenityCategory.safeParse({
    name: formData.get("name")
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name } = validatedFields.data;

  const amenityCategory = new AmenityCategory({
    name: name
  });
  await amenityCategory.save();

  // Revalidate the cache for the invoices page and redirect the user.
  revalidatePath("/setting/amenity-categories");
  redirect("/setting/amenity-categories");
}

export async function deleteAmenityCategory(id: string) {
  try {
    await AmenityCategory.findOneAndDelete({ _id: id }).exec();
    revalidatePath("/setting/amenity-categories");
    return { message: "Deleted Amenity Category." };
  } catch (error) {
    return { message: "Database Error: Failed to Delete Amenity Category." };
  }
}
