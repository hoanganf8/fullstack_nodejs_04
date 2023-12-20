import styles from "./posts.module.scss";
import clsx from "clsx";
const postApi = `https://jsonplaceholder.typicode.com/posts`;
const getPosts = async () => {
  const response = await fetch(postApi);
  const postList = await response.json();
  return postList;
};
const Posts = async () => {
  const postList = await getPosts();
  return (
    <div className={clsx(styles.box)}>
      <h1>Posts</h1>
      {postList.map(({ id, title }) => (
        <h2 key={id}>{title}</h2>
      ))}
    </div>
  );
};

export default Posts;

//Server Component
