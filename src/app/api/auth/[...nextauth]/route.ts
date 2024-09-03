import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { z } from "zod";
import bcrypt from "bcrypt";
import connect from "@/app/utils/db";
import User from "@/app/models/User";

async function getUser(email: string) {
  try {
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
    };

    return transformedData;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
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

        return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
