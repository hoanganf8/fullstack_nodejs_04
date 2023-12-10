"use client";

import { useState } from "react";
// import { useEffect, useState } from "react";
import useSWR from "swr";
export const postApi = `https://jsonplaceholder.typicode.com/posts`;
const fetcher = (url) => fetch(url).then((response) => response.json());
const PostList = () => {
  //   const [postList, setPostList] = useState([]);
  //   const getPosts = async () => {
  //     const response = await window.fetch(postApi);
  //     const posts = await response.json();
  //     setPostList(posts);
  //   };
  //   useEffect(() => {
  //     getPosts();
  //   }, []);

  const {
    data: postList,
    isLoading,
    error,
    mutate,
  } = useSWR(postApi, fetcher, {
    revalidateOnFocus: false,
    // refreshInterval: 2000,
    revalidateOnReconnect: true,
  });
  if (error) {
    return <h3>Đã có lỗi xảy ra...</h3>;
  }

  return (
    <div>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        postList?.map(({ id, title }) => <h3 key={id}>{title}</h3>)
      )}
    </div>
  );
};

export default PostList;
