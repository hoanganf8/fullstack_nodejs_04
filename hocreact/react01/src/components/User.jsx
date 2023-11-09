import React from "react";

const User = ({ name, email, age, onGetData, children }) => {
  //   console.log(props);
  //   props.name = "abc"; ---> Lỗi
  return (
    <div>
      {children}
      <h1>{name}</h1>
      <h2>{email}</h2>
      <h3>{age}</h3>
      <button
        onClick={() => {
          onGetData("Hello F8");
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default User;
