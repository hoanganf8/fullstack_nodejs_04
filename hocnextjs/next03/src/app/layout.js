export const metadata = {
  title: "F8 - Học lập trình không khó",
  description: "F8 cung cấp các khóa học lập trình Fullstack,...",
  openGraph: {
    title: "F8 - Học lập trình không khó 111",
    description: "F8 cung cấp các khóa học lập trình Fullstack,... 111",
    images: [
      "https://cdnphoto.dantri.com.vn/z1XlPZIi4gRd6KsSz4bqIqvhBJ8=/zoom/1032_688/2023/12/20/2-1-edited-1703056934120.jpeg",
    ],
    url: "http://localhost:3000",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
