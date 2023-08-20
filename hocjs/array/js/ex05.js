//Array-Like Object
// function sum() {
//   //   console.log(arguments);
//   //   console.log(Array.isArray(arguments));
//   Array.from(arguments).forEach(function (item) {
//     console.log(item);
//   });
// }

// sum(5, 10, 15, 20, 25);

// //Tự tạo Array-Like Object
// var a = {
//   length: 3,
//   0: "An",
//   1: "Quân",
//   2: "Thanh",
// };
// console.log(a);
// a = Array.from(a); //Chuyển Array-Like Object thành Array
// console.log(a);

// a.forEach(function (item) {
//   console.log(item);
// });

// var p = document.getElementsByTagName("p"); //Collection
// Array.from(p).forEach(function (item) {
//   console.log(p);
// });

var a = ["Hoàng An", "hoangan.web@gmail.com"];
console.log(JSON.stringify(a));

//Clone Array
// var b = a;
// var b = a.map(function (item) {
//   return item;
// });
// var b = a.slice(0);
// var b = a.filter(function () {
//   return true;
// });
var b = Array.from(a);

b[0] = "Hoàng An F8";
console.log(a);
console.log(b);
