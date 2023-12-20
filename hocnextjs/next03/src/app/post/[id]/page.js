import { notFound } from "next/navigation";
import { headers } from "next/headers";
import Header from "@/app/components/Header";

const getPost = async (id) => {
  const postApi = `https://jsonplaceholder.typicode.com/posts/${id}`;
  const response = await fetch(postApi);
  const postList = await response.json();
  return postList;
};
export const generateMetadata = async ({ params }) => {
  const { id } = params;
  const { title, body } = await getPost(id);
  return {
    title,
    description: body,
  };
};
const PostsPage = async ({ params }) => {
  const { id } = params;
  const { title, body } = await getPost(id);
  if (!title) {
    notFound();
  }
  const pathname = headers().get("x-pathname");

  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
      <p>Path: {pathname}</p>
      <p>{process.env.APP_NAME}</p>
      <Header />
    </div>
  );
};

export default PostsPage;
