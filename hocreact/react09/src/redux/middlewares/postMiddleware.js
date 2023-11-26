import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk("getPosts", async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await response.json();
  return data;
});

// console.log(getPosts.pending());
// console.log(getPosts.fulfilled());
// console.log(getPosts.rejected());

//Call API: Promise Status
/*
- pending
- fulfilled
- rejected
*/
