"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import {
  OfficeFormSchema,
  OfficeFormState
} from "@/app/lib/definitions";
import Office from "@/models/Office";

const UpdateOffice = OfficeFormSchema.omit({ id: true });

export async function updateOffice(
  id: string,
  prevState: OfficeFormState,
  formData: FormData
) {
  const validatedFields = UpdateOffice.safeParse({
    location: formData.get("location"),
    status: formData.get("status"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { location, status } = validatedFields.data;

  try {
    const update = { location: location, status: status };

    const filterOffice = { _id: id };
    await Office.findOneAndUpdate(filterOffice, update);

  } catch (error) {
    return { message: "Database Error: Failed to Update Invoice." };
  }

  revalidatePath("/setting/offices");
  redirect("/setting/offices");
}

const CreateOffice = OfficeFormSchema.omit({ id: true });

export async function createOffice(prevState: OfficeFormState, formData: FormData) {
   
  // Validate form using Zod
  const validatedFields = CreateOffice.safeParse({
    location: formData.get("location"),
    status: formData.get("status")
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  console.log(validatedFields.data);
  const { location, status } = validatedFields.data;

  const office = new Office({
    location: location,
    status: status,
  });
  await office.save();

  // Revalidate the cache for the invoices page and redirect the user.
  revalidatePath("/setting/offices");
  redirect("/setting/offices");
}

export async function deleteOffice(id: string) {
  try {
    await Office.findOneAndDelete({ _id: id }).exec();
    revalidatePath("/setting/offices");
    return { message: "Deleted Office." };
  } catch (error) {
    return { message: "Database Error: Failed to Delete Office." };
  }
}
