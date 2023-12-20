/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cdnphoto.dantri.com.vn",
      },
      {
        hostname: "files.fullstack.edu.vn",
      },
    ],
  },
  // async headers() {
  //   return [
  //     {
  //       source: "/:path*",
  //       headers: [
  //         {
  //           key: "x-pathname",
  //           value: ":path*",
  //         },
  //       ],
  //     },
  //   ];
  // },
  env: {
    APP_NAME: process.env.APP_NAME,
  },
  async rewrites() {
    return [
      {
        source: "/gioi-thieu",
        destination: "/about",
      },
      {
        source: "/bai-viet-:path*.html",
        destination: "/post/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
