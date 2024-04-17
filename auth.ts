import NextAuth from "next-auth";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/app/lib/db";

import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import bcrypt from "bcrypt";
import { IAuth } from "@/app/models/Auth";
import { WithId } from "mongodb";

async function getUser(email: string): Promise<WithId<IAuth> | null> {
  try {
    const client = await clientPromise;
    const db = client.db();
    const auth = db.collection<IAuth>("auths").findOne({ email });
    const user = await auth.then((data) => data);
    return user;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    Credentials({
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

        return null;
      },
    }),
  ],
  session: {
    // Use JSON Web Tokens for session instead of database sessions.
    strategy: "jwt",
  },
  callbacks: {
    // async jwt({ token, user }) {
    //   if (user) {
    //     token.email = user.email;
    //     token.name = user.name;
    //   }
    //   return token;
    // },
    async signIn({ user, account, profile, email, credentials }) {
      const isAllowedToSignIn = true;
      if (isAllowedToSignIn) {
        return true;
      } else {
        // Return false to display a default error message
        return false;
        // Or you can return a URL to redirect to:
        // return '/unauthorized'
      }
    },
  },
});
