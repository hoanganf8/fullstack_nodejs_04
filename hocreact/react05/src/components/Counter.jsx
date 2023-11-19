import { useEffect, useRef, useState } from "react";
import Content from "./Content";
import Title from "./Title";

const Counter = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const inputRef = useRef();
  const handleIncre = () => {
    setCount(count + 1);
    countRef.current++;
    console.log(countRef);
  };
  // console.log("Render");
  const titleRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
    console.log(titleRef);
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncre}>+</button>
      <input type="text" ref={inputRef} />
      <Content />
      <Title ref={titleRef} />
    </div>
  );
};

export default Counter;
