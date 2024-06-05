"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import {
  MediaLibraryFormSchema,
  MediaLibraryFormState,
} from "@/app/lib/definitions";
import RefinementLevel from "../models/RefinementLevel";
import { unlink, writeFile } from "fs/promises";
import path from "path";
import Media from "../models/Media";
import { decrypt } from "./session";
import { cookies } from "next/headers";

const UpdateSchema = MediaLibraryFormSchema.omit({ id: true });

export async function updateMedia(
  id: string,
  prevState: MediaLibraryFormState,
  formData: FormData
) {
  const validatedFields = UpdateSchema.safeParse({
    image: formData.get("image"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { image } = validatedFields.data;

  try {
    const update = {
      image: image,
    };
    const filter = { _id: id };

    await Media.findOneAndUpdate(filter, update);
  } catch (error) {
    return { message: "Database Error: Failed to Update refinement." };
  }

  revalidatePath("/setting/media-libraries");
  redirect("/setting/media-libraries");
}

const CreateSchema = MediaLibraryFormSchema.omit({ id: true });

export async function createMedia(
  prevState: MediaLibraryFormState,
  formData: FormData
) {
  // Validate form using Zod
  const validatedFields = CreateSchema.safeParse({
    image: formData.get("image"),
  });

  const cookieStore = cookies();
  const session = await decrypt(cookieStore.get("session")?.value);

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { image } = validatedFields.data;

  const buffer = Buffer.from(await image.arrayBuffer());
  // Replace spaces in the file name with underscores
  let filename = image.name.replaceAll(" ", "_");
  filename = `${Date.now()}${filename?.substring(filename?.lastIndexOf("."))}`;

  await writeFile(
    path.join(process.cwd(), "public/uploads/" + filename),
    buffer
  );

  const media = new Media({
    fileName: filename,
    uploadedBy: session?.userId,
    fileType: image.type,
    fileSize: image.size,
  });
  await media.save();

  revalidatePath("/setting/media-libraries");
  redirect("/setting/media-libraries");
}

export async function deleteMedia(id: string) {
  try {
    let media = await Media.findOne({ _id: id }).exec();
    let filename = media.fileName;

    await unlink(path.join(process.cwd(), "public/uploads/" + filename));

    await Media.findOneAndDelete({ _id: id }).exec();
    revalidatePath("/setting/media-libraries");
    return { message: "Deleted Refinement level." };
  } catch (error) {
    return { message: "Database Error: Failed to Delete Refinement." };
  }
}
