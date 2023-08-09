/*
function tenHam() {

}
//declaration function

var tenHam = function() {

}
//expression function
*/

var getMsg = function () {
  console.log("Hoàng An F8");
};

getMsg();

// var a = function () {
//   return "Func a";
// };

//Kiểm tra 1 biến có phải là function hay không?
// if (typeof a === "function") {
//   console.log(a());
// } else {
//   console.log(a);
// }

// var a = function (name) {
//   console.log("Func A", name);
// };
// var b = a;
// var c = b;

// c("F8");

var getA = function (fn, ...args) {
  //fn sẽ là 1 hàm
  console.log("getA");
  if (typeof fn === "function") {
    fn(...args); //Lời gọi hàm
  }
};

var getB = function () {
  console.log("getB");
};

var getC = function (name, email) {
  console.log("getC", name, email);
};

// getA(getC, "Hoàng An", "admin@fullstack.edu.vn"); //Gọi hàm theo kiểu callback

// getA(function () {
//   getC("Hoàng An", "hoangan.web@gmail.com");
// });

//getA() => getB() => getC() => getD()

//setTimeout() => Delay 1 hàm, đoạn chương trình
// var handleTimeout = function (name) {
//   console.log("Tôi là Tạ Hoàng An", name);
// };
// setTimeout(handleTimeout, 1000, "F8");

//setInterval() => Lặp lại 1 chương trình sau 1 khoản thời gian

// var handleTimer = function () {
//   console.log(`Lần lặp thứ: ${++count}`);
//   if (count === 10) {
//     clearInterval(id);
//   }
// };
// var count = 0;

// window.onload = handleTimer;

// var id = setInterval(handleTimer, 2000);

//IIFE
// (function (name) {
//   console.log("Xin chào F8", name);
// })("Hoàng An Fullstack");
