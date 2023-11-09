import React from "react";
import User from "./components/User";

const App = () => {
  const users = [
    {
      id: 1,
      name: "User 1",
      email: "user1@gmail.com",
      age: 30,
    },
    {
      id: 2,
      name: "User 2",
      email: "user2@gmail.com",
      age: 31,
    },
    {
      id: 3,
      name: "User 3",
      email: "user3@gmail.com",
      age: 32,
    },
  ]; // -> render mảng users lên UI (Mỗi user gọi component User)
  //   return (
  //     <div>
  //       <h1>Props</h1>
  //       {users.map((user) => (
  //         <User key={user.id} {...user} />
  //       ))}
  //     </div>
  //   );
  const handleGetData = (data) => {
    console.log(data);
  };
  //   return <User onGetData={handleGetData} />;
  return (
    <User name="Hoàng An" email="hoangan.web@gmail.com" age="31">
      <h2>Thông tin user</h2>
    </User>
  );
};

export default App;

/*
Props: 
- Truyền dữ liệu từ component cha -> component con
- Không sửa được
- Render Props
- Children Props

const a = () => {

}
const b = a;
const c = b;
const d = c;
d()
*/
