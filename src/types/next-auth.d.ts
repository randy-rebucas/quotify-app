import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    userId: string;
    userRoles: any[];
    user: {
      /** The user's postal address. */
      name: string
    } & DefaultSession["user"]
  }
}
