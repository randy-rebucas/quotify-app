"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import {
  MediaLibraryFormSchema,
  MediaLibraryFormState,
  UpdateMediaLibraryFormSchema,
} from "@/lib/definitions";
import RefinementLevel from "@/models/RefinementLevel";
import { unlink, writeFile } from "fs/promises";
import path from "path";
import Media from "@/models/Media";
import { decrypt } from "./session";
import { cookies } from "next/headers";
import { existsSync, unlinkSync } from "fs";
import fs from "fs";
import https from "https";
import { delete_file, upload } from "@/lib/bunny";

const UpdateSchema = UpdateMediaLibraryFormSchema.omit({ id: true });

export async function updateMedia(
  id: string,
  prevState: MediaLibraryFormState,
  formData: FormData
) {
  const validatedFields = UpdateSchema.safeParse({
    title: formData.get("title"),
    alternativeText: formData.get("alternativeText"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { title, alternativeText } = validatedFields.data;

  try {
    const update = {
      metaData: {
        title: title,
        alternativeText: alternativeText,
      },
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

  const bunny_preview_url = upload(path.join(process.cwd(), "public/uploads/" + filename), filename, 'media')

  const media = new Media({
    fileName: bunny_preview_url,
    uploadedBy: session?.userId,
    fileType: image.type,
    fileSize: image.size,
  });
  await media.save();

  const directoryPath = path.join(process.cwd(), "public/uploads/");

  if (existsSync(directoryPath + filename)) {
    unlinkSync(directoryPath + filename);
  }

  revalidatePath("/setting/media-libraries");
  redirect("/setting/media-libraries");
}

export async function deleteMedia(id: string) {
  try {
    let media = await Media.findOne({ _id: id }).exec();
    let filename = media.fileName;
    const directoryPath = path.join(process.cwd(), "public/uploads/");

    if (existsSync(directoryPath + filename)) {
      unlinkSync(directoryPath + filename);
    }

    await Media.findOneAndDelete({ _id: id }).exec();

    // await delete_file(filename);
    
    revalidatePath("/setting/media-libraries");
    return { message: "Deleted Refinement level." };
  } catch (error) {
    return { message: "Database Error: Failed to Delete Refinement." };
  }
}
