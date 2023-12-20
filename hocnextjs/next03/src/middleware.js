import { NextResponse } from "next/server";

export const middleware = (request) => {
  const response = NextResponse.next();
  const pathname = request.nextUrl.pathname;
  response.headers.set("x-pathname", pathname);
  return response;
};
