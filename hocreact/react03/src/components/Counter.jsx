import { useContext } from "react";
import { AppContext } from "../App";
const Counter = () => {
  const { data, handler } = useContext(AppContext);
  // const arr = [
  //   ["name", "Hoàng An"],
  //   ["email", "hoangan.web@gmail.com"],
  //   ["age", 31],
  // ];

  //Dùng reduce chuyển thành object theo cấu trúc như sau
  // const obj = arr.reduce((prev, curr) => {
  //   prev[curr[0]] = curr[1];
  //   return prev;
  // }, {});
  // console.log(obj);
  // const obj = {
  //   name: "Hoàng An",
  //   email: "hoangan.web@gmail.com",
  //   age: 31,
  // };
  // console.log(obj);
  return (
    <div>
      <h1>Count: {data.count}</h1>

      <button
        onClick={() => {
          handler("decrement");
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          handler("increment");
        }}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
