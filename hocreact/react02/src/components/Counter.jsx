import { useEffect, useState } from "react";
// let a = 0;
const Counter = () => {
  //Gọi hook ở đây
  const [count, setCount] = useState(0);
  const handleIncrement = async () => {
    //Không được gọi hook ở đây
    // setCount(count + 1);
    setCount((count) => count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  // if (count >= 10) {
  //   a = 11;
  // }
  //Gọi hook ở đây
  // useEffect(() => {
  //   console.log("Mount");
  //   // console.log("effect: " + count);
  //   return () => {
  //     console.log("Unmount");
  //   };
  // }, []);
  useEffect(() => {
    console.log("effect: " + count);
    return () => {
      console.log("cleanup: " + count);
    };
  }, [count]);
  return (
    <div>
      {console.log("re-render:" + count)}
      <h1>Count: {count}</h1>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default Counter;

/*
const result = useState(initialValue)
Trả về 1 array bao gồm 2 phần tử: 
- Giá trị của state
- Hàm cập nhật State

Chú ý khi cleanup trong useEffect
- eventListener, removeEventListener
- Subscribe, Unsubscribe --> observer pattern
- Timer: setTimeout, setInterval
- Blob, localStorage, sessionStorage,...
- set state khi call api (Đảm bảo component chưa bị unmout)
*/
