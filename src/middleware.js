// Import NextResponse and NextRequest
import { NextResponse } from "next/server";

// Define arrays for authenticated and protected routes
const authRoutes = ["/"];
// const protectedRoutes = ['/'];
const protectedRoutes = ["/", "/home", "/about", "/commercial", "/residential"];

// Define the middleware function
export function middleware(request) {
  // Check if the 'authToken' cookie exists
  const authToken = request.cookies.get("authToken");

  // console.log(authToken, 'hello');

  // Default action if the request does not match any of the defined routes
  return NextResponse.next();
}
