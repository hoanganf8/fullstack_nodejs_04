/*
Front-End => Giao diện, xử lý hiệu ứng, thao tác với các thành phần trên trang web

Dữ liệu lấy đâu ra?

-> Lấy ở trên Server (Back-End xử lý)

-> Front-End sẽ phải thao tác để lấy dữ liệu, thêm dữ liệu, sửa dữ liệu, xóa dữ liệu (Thao tác với Server)

Server => Phải cung cấp API

API là gì? 
- Application Programming Interface = Giao diện lập trình ứng dụng
- Cung cấp các phương thức để các ứng dụng có thể giao tiếp được với nhau

RESTFul API -> Tiêu chuẩn để thiết kế Web API

- URL Request (Back-end sẽ cung cấp): Server API + Resource
=> Ví dụ: https://api.fullstack.edu.vn/users

- Http Method
+ GET -> Lấy dữ liệu từ Server
+ POST -> Thêm dữ liệu mới
+ PUT -> Sửa dữ liệu (Ghi đè)
+ PATCH -> Sửa dữ liệu (Không ghi đè)
+ DELETE -> Xóa

- Endpoint: Sự kết hợp giữa Http method và Resource

GET /users -> Endpoint
POST /users -> Endpoint

- Status Code

- Response Message: JSON

Làm sao để thao tác với API trong js?
- XMLHttpRequest -> Không trả về promise
- fetch -> Trả về promise
- Thư viện: axois, jquery ajax,...
*/

const serverApi = `http://localhost:3000`;
// fetch(`${serverApi}/users`)
//   .then((response) => {
//     //Lấy thông tin của response trả về
//     //Muốn lấy dữ liệu: gọi đến hàm json() hoặc text()
//     return response.json(); //Hàm này trả về 1 promise
//   })
//   .then((users) => {
//     console.log(users);
//   });

// const getUsers = async () => {
//   const response = await fetch(`${serverApi}/users`);
//   const users = await response.json();
//   document.body.innerHTML = users
//     .map(({ name, email }) => `<h2>${name}</h2><h3>${email}</h3>`)
//     .join("");
// };
// getUsers();

// const getUser = async (id) => {
//   const response = await fetch(`${serverApi}/users/${id}`);
//   const user = await response.json();
//   console.log(user);
// };

// getUser(2);

const postUser = async (data) => {
  const response = await fetch(`${serverApi}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  console.log(response);
};

postUser({
  name: "User 5",
  email: "user5@gmail.com",
});
