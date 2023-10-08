//Spread Operator => Trải các phần tử array, object ra ngoài

// const oldObj = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
// };

// const newObj = {
//   course: "Fyllstack",
//   ...oldObj,
// };

// console.log(newObj);

// const oldArr = ["Hoàng An", "hoangan.web@gmail.com"];

// const newArr = ["Fullstack", ...oldArr];
// console.log(newArr);

const sum = (a, b, c) => a + b + c;

const values = [10, 20, 30];

console.log(sum(...values));

const initial = {
  name: "Hoàng An",
  email: "hoangan.web@gmail.com",
};

//Tạo 1 object mới có các phần tử giống object cũ và sửa lại email
const newObj = { ...initial, email: "contact@fullstack.edu.vn" };
console.log(initial);
console.log(newObj);

const initialArr = ["User 1", "User 2", "User 3"];

//Tạo 1 array mới có các phần tử của array ban đầu và thêm 1 phần tử mới
const newArr = [...initialArr];
newArr.push("User 4");
console.log(newArr);
