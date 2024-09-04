import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import bcrypt from "bcrypt";
import User from "@/app/models/User";
import { unstable_noStore as noStore } from "next/cache";
import connect from "@/app/utils/db";

async function getUser(email: string) {
  try {
    noStore();

    connect();

    const user = await User.findOne({ email })
      .populate("office")
      .populate("auth")
      .exec();

    const transformedData = {
      id: user._id.toString(),
      email: user.email,
      name: user.name,
      password: user.auth.password,
      roles: user.roles,
    }

    return transformedData;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email);

          if (!user) return null;
          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (passwordsMatch) return user;
        }
        console.log('Invalid credentials');
        return null;
      },
    }),
  ],
  callbacks: {
    async session({ session }) {
      // console.log(session)
      const user: any = await getUser(session?.user?.email);
      Object.assign(session.user, { id: user.id, roles: user.roles });
      return session;
      // session.userId = user.id;
      // session.userRoles = user.roles
      // return session;
    },
  },
});
