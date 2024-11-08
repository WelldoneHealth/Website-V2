// middleware.js
import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = req.cookies.get("authToken"); // Adjust name based on your auth cookie

  const { pathname } = req.nextUrl;

  // Define paths for protected routes and redirect unauthenticated users
  const isAuthRoute =
    pathname.startsWith("/dashboard") || pathname.startsWith("/profile"); // example protected paths
  const isPublicRoute =
    pathname.startsWith("/login") || pathname.startsWith("/register"); // example public paths

  // If accessing an authenticated route without a token, redirect to login
  if (isAuthRoute && !token) {
    const loginUrl = new URL("/login", req.url);
    return NextResponse.redirect(loginUrl);
  }

  // If authenticated and accessing a public route, redirect to dashboard (or another default authenticated route)
  if (isPublicRoute && token) {
    const dashboardUrl = new URL("/dashboard", req.url);
    return NextResponse.redirect(dashboardUrl);
  }

  // Allow request to proceed if no redirect is needed
  return NextResponse.next();
}

// Define routes where the middleware should apply
export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*", "/login", "/register"], // Example routes
};
