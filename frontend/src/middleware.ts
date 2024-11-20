import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const session = request.cookies.get("session");
  const fsPath = request.nextUrl.pathname;

  // Check authentication
  if (!session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const userRole = request.cookies.get("user_role")?.value;

  // Check permissions based on folder structure
  if (fsPath.includes("/(admin)/")) {
    if (userRole !== "admin" && userRole !== "superadmin") {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  if (fsPath.includes("/(seller)/")) {
    if (
      userRole !== "seller" &&
      userRole !== "admin" &&
      userRole !== "superadmin"
    ) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  if (fsPath.includes("/(user)/")) {
    // Allow all authenticated users to access user routes
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all protected routes
    "/(protected)/:path*",
  ],
};
