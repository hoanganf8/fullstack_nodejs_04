import { useSelector, useDispatch } from "react-redux";
const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch({
      type: "counter/increment",
      payload: 10,
    });
  };
  const handleDecrement = () => {
    dispatch({
      type: "counter/decrement",
      payload: 5,
    });
  };
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default Counter;
