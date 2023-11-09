import React, { Fragment } from "react";

const App = () => {
  const users = [
    {
      id: 1,
      name: "User 1",
      email: "user1@gmail.com",
    },
    {
      id: 2,
      name: "User 2",
      email: "user1@gmail.com",
    },
  ]; // ---> Render mảng users lên UI (Name ở thẻ h2, email ở thẻ h3. Không được bọc thẻ div ra ngoài)
  return (
    <>
      <h1>Hello F8</h1>
      <h1>Hello F8</h1>
      {users.map(({ id, name, email }) => (
        <React.Fragment key={id}>
          <h2>{name}</h2>
          <h3>{email}</h3>
        </React.Fragment>
      ))}
    </>
  );
};

export default App;

//Fragment: React.Fragment
//Short: <></>
