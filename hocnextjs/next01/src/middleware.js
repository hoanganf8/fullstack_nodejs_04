import { NextResponse } from "next/server";
const isLogin = false;
export const middleware = (request) => {
  //   console.log(request);
  const pathname = request.nextUrl.pathname;
  /*
  Nếu truy cập vào trang /admin --> Kiểm tra xem user đã login hay chưa?
  - Nếu đã đăng nhập (isLogin = true) --> Cho phép đi qua
  - Nếu chưa đăng nhập (isLogin = false) --> Chuyển hướng về trang đăng nhập
  */
  if (pathname.startsWith("/admin") && !isLogin) {
    //Chuyển hướng
    const urlLogin = `${request.nextUrl.origin}/login`;
    return NextResponse.redirect(urlLogin);
  }
  //Request
  const userAgent = request.headers.get("user-agent");
  const method = request.method;
  const url = request.url;
  const accept = request.headers.get("accept");
  const searchParams = request.nextUrl.searchParams;
  const status = searchParams.get("status");
  const query = searchParams.get("query");
  const cookie = request.headers.get("cookie");
  const username = request.cookies.get("username");
  const email = request.cookies.get("email");

  //Response
  const response = NextResponse.next();
  //Thay đổi các thông tin response: status, header,...
  response.headers.set("x-api-key", "ahihi");
  //HTTP --> set cookie từ server bằng cách set header: Set-Cookie
  //   response.headers.set("Set-Cookie", "phone=0388875179;path=/;httpOnly");
  //   response.cookies.set({
  //     name: "phone",
  //     value: "0123",
  //     path: "/",
  //     httpOnly: true,
  //     maxAge: 86400,
  //   });
  response.cookies.delete("phone");
  return response;
};

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
    // "/admin/:path*",
    // "/login/:path*",
    // "/register/:path*",
  ],
};
