import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Get the pathname of the request
  const path = request.nextUrl.pathname

  // Define public paths that don't require authentication
  const isPublicPath = path === "/login" || path === "/signup"

  // Check if the user is authenticated (this is a simple simulation)
  // In a real app, you would check for a valid JWT token
  const isAuthenticated = request.cookies.has("auth_token")

  // If the user is not authenticated and trying to access a protected route
 // if (!isAuthenticated && !isPublicPath) {
    // Redirect to the login page
    //return NextResponse.redirect(new URL("/login", request.url))
  //}

  // If the user is authenticated and trying to access login/signup
  // if (isAuthenticated && isPublicPath) {
  //   // Redirect to the dashboard
  //   return NextResponse.redirect(new URL("/dashboard", request.url))
  // }

  // Otherwise, continue with the request
  return NextResponse.next()
}

// Configure the middleware to run on specific paths
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
}

