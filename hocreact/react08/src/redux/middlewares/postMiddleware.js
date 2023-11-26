/* eslint-disable no-unused-vars */
export const getPosts = () => {
  return async (dispatch, getState) => {
    //Call API
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await response.json();
    // console.log(data);
    dispatch({
      type: "posts/fetch",
      payload: data,
    });
  };
};
