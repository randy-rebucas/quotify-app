import { NextRequest, NextResponse } from "next/server";

import { cookies } from "next/headers";
import { decrypt } from "./actions/session";

export default async function middleware(req: NextRequest) {
  // 1. Specify protected and public routes
  const protectedRoutes = ["/projects", "/setting", "/estimation"];
  const publicRoutes = ["/", "/login", "/signup"];

  // 2. Check if the current route is protected or public
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  // 3. Decrypt the session from the cookie
  const cookie = cookies().get("session")?.value;
  const session = await decrypt(cookie);

  const isAuthenticated = !!session?.userId;

  // 5. Redirect to /login if the user is not authenticated
  if (isProtectedRoute && !isAuthenticated) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  // 6. Redirect to /projects if the user is authenticated
  if (
    isPublicRoute &&
    isAuthenticated &&
    !req.nextUrl.pathname.startsWith("/projects")
  ) {
    return NextResponse.redirect(new URL("/projects", req.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|images|favicon.ico).*)",
  ],
};
