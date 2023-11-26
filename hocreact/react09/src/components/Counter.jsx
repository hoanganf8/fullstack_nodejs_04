import { useDispatch, useSelector } from "react-redux";
import { couterSlice } from "../redux/slice/counterSlice";
import { useEffect } from "react";
import { getPosts } from "../redux/middlewares/postMiddleware";
const { increment, decrement } = couterSlice.actions;

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  const handleIncrement = () => {
    // console.log(increment(5));
    dispatch(increment(5));
  };
  const handleDecrement = () => {
    dispatch(decrement(10));
  };
  useEffect(() => {
    dispatch(getPosts());
  }, []);
  const postList = useSelector((state) => state.counter.postList);
  const status = useSelector((state) => state.counter.status);

  if (status === "error") {
    return <h3>Đã có lỗi xảy ra</h3>;
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
      <h2>Danh sách bài viết</h2>
      {status !== "idle" &&
        (status === "pending" ? (
          <h3>Loading...</h3>
        ) : (
          postList.map(({ id, title }) => <h3 key={id}>{title}</h3>)
        ))}
    </div>
  );
};

export default Counter;
