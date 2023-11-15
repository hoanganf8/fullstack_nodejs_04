import { createContext, useEffect, useState } from "react";
import Counter from "./components/Counter";
import Message from "./components/Message";
export const AppContext = createContext();
const App = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");
  const handler = (type) => {
    if (type === "increment") {
      setCount(count + 1);
    }
    if (type === "decrement") {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    if (count === 10) {
      setMessage("Học React không khó");
    }
  }, [count]);

  return (
    <AppContext.Provider
      value={{
        data: {
          count,
          message,
        },
        handler,
      }}
    >
      <div>
        <h1>Context API</h1>
        <Counter />
        <Message />
      </div>
    </AppContext.Provider>
  );
};

export default App;

/*
Context API

A -> B -> C -> D ==> Truyền qua props

A -> D -> B -> C ==> Gãy chuỗi nhận dữ liệu từ Component A

--> Giải pháp: Dùng context để gửi và nhận dữ liệu không cần thông qua props

Context có 3 thành phần chính: 
1. Đối tượng Context: React.createContext()
2. Provider: Component của đối tượng Context
3. Consumer (Thay thế bởi hook useContext)
*/
