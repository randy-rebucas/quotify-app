"use server";

import Amenity from "../models/Amenity";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import {
  AmenityFormState,
  AmenitypFormSchema
} from "@/app/lib/definitions";

const CreateAmenity = AmenitypFormSchema.omit({ id: true });

export async function updateAmenity(
  id: string,
  prevState: AmenityFormState,
  formData: FormData
) {

  const validatedFields = CreateAmenity.safeParse({
    amenity_name: formData.get("amenity_name"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { amenity_name } = validatedFields.data;

  const update = { amenityName: amenity_name };

  const filterAmenity = { _id: id };
  await Amenity.findOneAndUpdate(filterAmenity, update);

  revalidatePath("/setting/amenities");
  redirect("/setting/amenities");
}

export async function createAmenity(
  prevState: AmenityFormState,
  formData: FormData
) {
  // Validate form using Zod
  const validatedFields = CreateAmenity.safeParse({
    amenity_name: formData.get("amenity_name"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { amenity_name } = validatedFields.data;

  const amenity = new Amenity({
    amenityName: amenity_name,
  });
  await amenity.save();

  // Revalidate the cache for the invoices page and redirect the user.
  revalidatePath("/setting/amenities");
  redirect("/setting/amenities");
}

export async function deleteAmenity(id: string) {
  try {
    await Amenity.findOneAndDelete({ _id: id }).exec();
    revalidatePath("/setting/amenities");
    return { message: "Deleted Amenity." };
  } catch (error) {
    return { message: "Database Error: Failed to Delete Amenity." };
  }
}
