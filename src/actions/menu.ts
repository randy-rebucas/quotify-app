"use server";

import Menu from "@/models/Menu";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import {
  MenuFormSchema,
  MenuFormState
} from "@/lib/definitions";

const CreateMenu = MenuFormSchema.omit({ id: true });

export async function updateMenu(
  id: string,
  prevState: MenuFormState,
  formData: FormData
) {

  const validatedFields = CreateMenu.safeParse({
    title: formData.get("title"),
    page_handled: formData.get("page_handled"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { title, page_handled } = validatedFields.data;

  const update = { 
    title: title,
    pageHandled: page_handled,
 };

  const filterMenu = { _id: id };
  await Menu.findOneAndUpdate(filterMenu, update);

  revalidatePath("/setting/menus");
  redirect("/setting/menus");
}

export async function createMenu(
  prevState: MenuFormState,
  formData: FormData
) {
  // Validate form using Zod
  const validatedFields = CreateMenu.safeParse({
    title: formData.get("title"),
    page_handled: formData.get("page_handled"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { title, page_handled } = validatedFields.data;

  const menu = new Menu({
    title: title,
    pageHandled: page_handled,
  });
  await menu.save();

  // Revalidate the cache for the invoices page and redirect the user.
  revalidatePath("/setting/menus");
  redirect("/setting/menus");
}

export async function deleteMenu(id: string) {
  try {
    await Menu.findOneAndDelete({ _id: id }).exec();
    revalidatePath("/setting/menus");
    return { message: "Deleted Menu." };
  } catch (error) {
    return { message: "Database Error: Failed to Delete Menu." };
  }
}
