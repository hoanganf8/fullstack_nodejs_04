"use client";
import { useState } from "react";
import { postApi } from "./PostList";
import { mutate } from "swr";
const PostForm = () => {
  const [title, setTitle] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(postApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    });
    if (response.ok) {
      mutate(postApi);
    }
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Tiêu đề..."
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <button>Thêm</button>
    </form>
  );
};

export default PostForm;
