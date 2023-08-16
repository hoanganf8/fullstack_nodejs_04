//Array là Object

// console.log(Array.prototype);
// console.log([Array]);

//Khai báo mảng
var users = ["An", "Dương", "Vương"];
// console.log(users);
// console.log(typeof users);

// var users = new Array("An", "Dương", "Vương");
// console.log(users);
// console.log(typeof users);

//Kiểm tra 1 biến có phải là mảng hay không?
if (Array.isArray(users)) {
  console.log("Đây là mảng");
} else {
  console.log("Đây không phải mảng");
}

//Lấy số lượng phần tử của mảng
// console.log(users.length);

//Thêm phần tử vào cuối mảng
//tenbienmang[index] = giá trị
users[users.length] = "Đạt";
users[users.length] = "Tùng";
users[users.length] = "Quý";

//Sửa phần tử trong mảng
users[2] = "Dũng";

//Truy cập vào 1 phần tử trong mảng
// console.log(users[0]);
// console.log(users[3]);

//Duyệt mảng
// console.log(users);

// for (var index = 0; index < users.length; index++) {
//   console.log(users[index]);
// }

// for (var index in users) {
//   console.log(users[index]);
// }

// for (var value of users) {
//   console.log(value);
// }

//Xóa phần tử trong mảng
// var indexDel = 1;
// var newArr = [];
// for (var index in users) {
//   if (+indexDel === +index) {
//     continue;
//   }
//   newArr[newArr.length] = users[index];
// }
// console.log(newArr);

//Bài tập 1: Thêm 1 phần tử vào đầu mảng
// var value = "Tuấn";
// //Thêm value vào đầu mảng users
// var newArr = [value];
// for (var index in users) {
//   newArr[newArr.length] = users[index];
// }
// console.log(newArr);

//Bài 2: Nối 2 mảng và trả về 1 mảng mới
var arr1 = ["A", "B", "C", "D"];

var arr2 = [1, 2, 3];

///Nối mảng arr1 và arr2 lại với nhau và trả về 1 mảng mới (arr1, arr2 không thay đổi)
//Không dùng hàm có sẵn
var newArr = [];
// for (var index in arr1) {
//   newArr[newArr.length] = arr1[index];
// }

// for (var index in arr2) {
//   newArr[newArr.length] = arr2[index];
// }

for (var index = 0; index < arr1.length + arr2.length; index++) {
  if (index < arr1.length) {
    newArr[newArr.length] = arr1[index];
    continue;
  }

  newArr[newArr.length] = arr2[index - arr1.length];

  //index - arr1.length
}

console.log(newArr);
