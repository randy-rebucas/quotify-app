// import NextAuth from 'next-auth';
// import { authConfig } from '../auth.config';

// export default NextAuth(authConfig).auth;

// export const config = {
//   matcher: [
//     /*
//      * Match all request paths except for the ones starting with:
//      * - api (API routes)
//      * - _next/static (static files)
//      * - _next/image (image optimization files)
//      * - favicon.ico (favicon file)
//      */
//     "/((?!api|_next/static|_next/image|favicon.ico).*)",
//   ],
// };

import { NextRequest, NextResponse } from "next/server";
import { decrypt, updateSession } from "@/app/lib/session";
import { cookies } from "next/headers";

// 1. Specify protected and public routes
const protectedRoutes = [
  "/file-management",
  "/estimation",
  "/estimation/*",
  "/setting",
  "/setting/*",
];
const publicRoutes = ["/", "/login", "/signup"];

export default async function middleware(req: NextRequest) {
  return await updateSession();
  // // 2. Check if the current route is protected or public
  // const path = req.nextUrl.pathname;
  // const isProtectedRoute = protectedRoutes.includes(path);
  // const isPublicRoute = publicRoutes.includes(path);

  // // 3. Decrypt the session from the cookie
  // const cookie = cookies().get("session")?.value;
  // const session = await decrypt(cookie);
 
  // // 5. Redirect to /login if the user is not authenticated
  // if (isProtectedRoute && !session?.userId) {
  //   return NextResponse.redirect(new URL("/login", req.nextUrl));
  // }

  // // 6. Redirect to /dashboard if the user is authenticated
  // if (
  //   isPublicRoute &&
  //   session?.userId &&
  //   !req.nextUrl.pathname.startsWith("/file-management")
  // ) {
  //   return NextResponse.redirect(new URL("/file-management", req.nextUrl));
  // }

  // return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
