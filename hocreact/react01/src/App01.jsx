//Tạo functional Component: rfc
//Tạo class Component: rce
import React from "react";

const App = () => {
  const html = `<h1>Học React không khó</h1>`;
  //Event Handler
  const handleClick = (e) => {
    console.log("Clicked me");
    console.log(e);
  };
  const handleClick2 = (text) => {
    console.log(text);
  };
  const isLogin = true;
  // const users = [
  //   <h3 key={1}>User 1</h3>,
  //   <h3 key={2}>User 2</h3>,
  //   <h3 key={3}>User 3</h3>,
  // ];
  const products = [
    {
      id: 1,
      name: "Product 1",
    },
    {
      id: 2,
      name: "Product 2",
    },
    {
      id: 3,
      name: "Product 3",
    },
  ]; //-> Yêu cầu: render mảng products lên UI (Mỗi sản phẩm nằm trong 1 thẻ h2)
  return (
    <div>
      <h1>App</h1>
      {products.map(({ id, name }) => (
        <h2 key={id}>{name}</h2>
      ))}
      {/* {users} */}
      {/* {isLogin && <h2>Chào mừng bạn đến với F8</h2>} */}
      {/* {isLogin ? (
        <h2>Chào mừng bạn quay trở lại</h2>
      ) : (
        <h3>Vui lòng đăng nhập để tiếp tục</h3>
      )} */}
      {/* {html} */}
      {/* <div
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      /> */}
      {/* <button onClick={handleClick}>Click me</button>
      <button
        onClick={(e) => {
          handleClick2(e.target.innerText);
        }}
      >
        Click me 2
      </button> */}
    </div>
  );
};

export default App;
