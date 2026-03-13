import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const authHeader = request;
  //   const token = authHeader?.startsWith("Bearer ")
  //     ? authHeader.split(" ")[1]
  //     : null;
  console.log("this s the token", authHeader);

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/login"],
};
