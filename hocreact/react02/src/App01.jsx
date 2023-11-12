import { useState } from "react";
import Counter from "./components/Counter";
// import Login from "./components/Login";

const App = () => {
  const [show, setShow] = useState(true);
  return (
    <div>
      {show && <Counter />}
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        Toggle
      </button>
    </div>
  );
  //return <Login />;
};

export default App;

/*
React Hook --> Làm việc với các thành phần của React: State, Lifecycle, Refs,...
- 1 hàm đặc biệt, bắt đầu bằng từ khóa use (Có thể do React định nghĩa hoặc lập trình viên tự định nghĩa)
- Hook chỉ được gọi trong functional component (Phải gọi ngay cấp đầu tiên trong functional)
*/
