// middleware.ts (in your root directory)
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Add the paths that don't require authentication
const publicPaths = ["/login", "/register"];

export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get("userState");

  // Check if the current path is in public paths
  const isPublicPath = publicPaths.includes(request.nextUrl.pathname);

  // If there's no user and the path is not public, redirect to login
  if (!currentUser && !isPublicPath) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // If there's a user and they're trying to access login/register, redirect to home
  if (currentUser && isPublicPath) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

// Configure which routes to run middleware on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!api|_next/static|_next/image|favicon.ico|public).*)",
  ],
};
