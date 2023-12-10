import React from "react";
import PostList from "./PostList";
import PostForm from "./PostForm";

const Page = () => {
  return (
    <div>
      <h1>Danh sách bài viết</h1>
      <PostList />
      <PostForm />
    </div>
  );
};

export default Page;
