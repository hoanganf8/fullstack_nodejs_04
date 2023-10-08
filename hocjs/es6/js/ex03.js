//Object, Array ES6

//Destructuring: Phá vỡ cấu trúc của Array, Object để truy cập vào các phần tử và gán thành các biến riêng biệt

// const user = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   age: 31,
//   "address-shipping": "Hồ Chí Minh",
// };
// console.log(user);
// const name = user.name;
// const email = user.email;
// const {
//   name: username,
//   email,
//   age = 30,
//   "address-shipping": addressShipping,
// } = user;
// console.log(username, email, age, addressShipping);

// const { name: username, email, ...rest } = user;
// console.log(rest);

// const users = [
//   {
//     id: 1,
//     name: "User 1",
//     email: "user1@gmail.com",
//   },
//   {
//     id: 2,
//     name: "User 2",
//     email: "user2@gmail.com",
//   },
//   {
//     id: 3,
//     name: "User 3",
//     email: "user3@gmail.com",
//   },
// ];

// const getUser = (userId) => users.find(({ id }) => id === userId);

// console.log(getUser(2));

const showMessage = ({ msg, type = "success" }) =>
  `<div class="msg msg-${type}">${msg}</div>`;

// console.log(showMessage({ msg: "Đăng ký thành công" }));

// console.log(showMessage({ msg: "Đăng ký thất bại", type: "error" }));

// const getPriceProduct = (price, currency = "vnđ", seps = ",") => {
//   console.log(price, currency, seps);
// };

// getPriceProduct(12000);
// getPriceProduct(15000, "vnđ", ".");

//Một số ngôn ngữ lập trình khác => named arguments

const getPriceProduct = ({ price, currency = "vnđ", seps = "," }) => {
  console.log(price, currency, seps);
};

// getPriceProduct({
//   price: 12000,
// });
// getPriceProduct({
//   price: 1500,
//   seps: ".",
// });

const users = [
  "Hoàng An",
  "hoangan.web@gmail.com",
  31,
  "Hà Nội",
  { course: "Fullstack", price: 25000000 },
];

// const [username = "No name", email, , address, phone = "No phone"] = users;
// console.log(username, email, address, phone);

// const [username, email, ...rest] = users;
// console.log(username, email);
// console.log(rest);

// const [username, email, age, address, { course, price }] = users;

// console.log(course, price);

let a = 10;
let b = 20;
[a, b] = [b, a];
console.log(a, b);

const user = {
  name: "Hoàng An",
  email: "hoangan.web@gmail.com",
};

const key = "email";

const { [key]: username } = user;
console.log(username);
