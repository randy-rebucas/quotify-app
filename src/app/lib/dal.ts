import "server-only";

import { cookies } from "next/headers";
import { decrypt } from "@/app/lib/session";
import { cache } from "react";
import { redirect } from "next/navigation";
import connect from "../utils/db";
import User from "../models/User";

export const verifySession = cache(async () => {
  const cookie = cookies().get("session")?.value;
  const session = await decrypt(cookie);

  if (!session?.userId) {
    redirect("/login");
  }

  return { isAuth: true, userId: session.userId };
});

export const getUser = cache(async () => {
  const session = await verifySession();
  if (!session) return null;

  try {
    // Connect to database
    connect();
    // 3. Check existing user email
    let user = await User.findById(session.userId).exec();

    return user;
  } catch (error) {
    console.log("Failed to fetch user");
    return null;
  }
});
