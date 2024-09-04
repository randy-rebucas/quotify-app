import { randomBytes, randomUUID } from "crypto";
import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  providers: [], // Add providers with an empty array for now
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    // Choose how you want to save the user session.
    // The default is `"jwt"`, an encrypted JWT (JWE) stored in the session cookie.
    // If you use an `adapter` however, we default it to `"database"` instead.
    // You can still force a JWT session by explicitly defining `"jwt"`.
    // When using `"database"`, the session cookie will only contain a `sessionToken` value,
    // which is used to look up the session in the database.
    strategy: "jwt",
    // Seconds - How long until an idle session expires and is no longer valid.
    maxAge: 30 * 24 * 60 * 60, // 30 days

    // Seconds - Throttle how frequently to write to database to extend a session.
    // Use it to limit write operations. Set to 0 to always update the database.
    // Note: This option is ignored if using JSON Web Tokens
    updateAge: 24 * 60 * 60, // 24 hours

    // The session token is usually either a random UUID or string, however if you
    // need a more customized session token string, you can define your own generate function.
    generateSessionToken: () => {
      return randomUUID?.() ?? randomBytes(32).toString("hex");
    },
  },
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;

      // 1. Specify protected and public routes
      const protectedRoutes = [
        "/file-management",
        "/estimation",
        "/estimation/*",
        "/setting",
        "/setting/*",
      ];
      const publicRoutes = ["/", "/login", "/signup"];

      // 2. Check if the current route is protected or public
      const path = nextUrl.pathname;
      const isProtectedRoute = protectedRoutes.includes(path);
      const isPublicRoute = publicRoutes.includes(path);

      // 5. Redirect to /login if the user is not authenticated
      if (isProtectedRoute && !isLoggedIn) {
        return Response.redirect(new URL("/login", nextUrl));
      }

      // 6. Redirect to /file-management if the user is authenticated
      if (
        isPublicRoute &&
        isLoggedIn &&
        !nextUrl.pathname.startsWith("/file-management")
      ) {
        return Response.redirect(new URL("/file-management", nextUrl));
      }

      return true;
    },
  }
} satisfies NextAuthConfig;
