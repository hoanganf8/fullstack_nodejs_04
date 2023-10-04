//Strict Mode
/*
Chế độ nghiêm ngặt của JS => Giúp lập trình viên giảm thiểu các lỗi ngầm => Sản phẩm tương thích trên tất cả trình duyệt
*/
"use strict";
// a = 10;
// console.log(a);

// var user = {
//   name: "Hoàng An",
// };

// delete user.name;
// delete user;

// console.log(user);

//Hoisting
/*
Cơ chế mặc định của Javascript giúp đẩy các phần khai báo biến,  hàm lên trc phần thực thi

- Biến: 
+ Chỉ đẩy phần khai báo, ko đẩy giá trị
+ Chỉ tồn tại với từ khóa var

Hàm: Chỉ hỗ trợ hàm declaration
*/

//declaration
function getA() {}

//expression
var getB = function () {};

// a = 10;
// console.log(a);
// var a;

console.log(b);
var b = 10;

getMessage();
function getMessage() {
  console.log("Hello F8");
}
