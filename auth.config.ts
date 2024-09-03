import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
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
      if (isProtectedRoute && !auth?.user) {
        return Response.redirect(new URL("/login", nextUrl));
      }

      // 6. Redirect to /file-management if the user is authenticated
      if (
        isPublicRoute &&
        auth?.user &&
        !nextUrl.pathname.startsWith("/file-management")
      ) {
        return Response.redirect(new URL("/file-management", nextUrl));
      }
      
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
