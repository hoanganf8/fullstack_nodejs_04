// var user = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   getName: function () {
//     return this.name;
//   },
// };

// var customer = {
//   name: "Lưu Anh Quân",
//   email: "luuanhquan@gmail.com",
//   getName: function () {
//     return this.name;
//   },
// };

// console.log(user, customer);

//Tạo ra 1 bản thiết kế cho Object
//=> Function Constructor
//Đặt tên theo cú pháp PascalCase

// var Person = function (name, email) {
//   this.name = name;
//   this.email = email;
//   this.getName = function () {
//     return this.name;
//   };
// };

// //Thêm prototype cho hàm tạo
// Person.prototype.message = "Hoàng An F8";

// //Khởi tạo object
// var person = new Person("An", "an@gmail.com");
// console.log(person);
// console.log(person.message);

// var user = new Person("Quân", "quan@gmail.com");
// console.log(user);
// console.log(user.message);

//Hàm tạo User
var User = function () {
  this.name = "Hoàng An";
  this.email = "hoangan.web@gmail.com";
  this.getA = function () {
    return `Hello A`;
  };

  //   return {
  //     getB: function () {
  //       return `Hello B`;
  //     },
  //   };
};

var Auth = function () {
  var user = new User();
  this.getInfo = function () {
    return `
    Name: ${user.name}
    Email: ${user.email}
    `;
  };
};

// var auth = new Auth();
// console.log(auth.getInfo());

//Kiểm tra biến thuộc hàm tạo nào
var a = new Auth();
var b = new User();
var c = "Hoàng An";
var d;
console.log(a.constructor.name);
console.log(b.constructor.name);
console.log(c.constructor.name);
// console.log(d.constructor.name);

// console.log(a instanceof Auth);

//Constructor => Object => instance

//Kiểm tra 1 biến có phải object không?

// var a = new User();
// if (typeof a === "object" && !Array.isArray(a) && a !== null) {
//   console.log("Object");
// } else {
//   console.log("Not Object");
// }

//Tạo ra 1 hàm nội bộ ở bên trong 1 hàm tạo
var getMessage = function () {
  return `Hello F8`;
};
console.log(window.getMessage());

User.getMessage2 = function () {
  return `Hello F8 - 02`;
};

console.log(User.getMessage2());
console.log(new User().getA());
// console.log(User().getB());
// console.log(new User());

/*
Phân biệt: 
- Gọi hàm nội bộ của hàm tạo: tenhamtao.tenham()
- Gọi phương thức của hàm tạo (Khởi tạo object)
new tenhamtao().tenphuongthuc()
*/

//Object.assign()
//Object.keys()

// var a = { name: "An" };
// console.log(a.valueOf());

/*
Buổi sau: 
- Bài tập liên quan đến object
- Xây dựng 1 phương thức giống thức map cho hàm tạo Array
- Object không có Prototype
- Copy Object: Deep vs Shallow
- Các dạng mảng vs object lồng nhau
- Object.entries()
*/
