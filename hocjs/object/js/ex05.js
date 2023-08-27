//Object.entries()
//Trả về cả key và value

var user = {
  name: "Hoàng An",
  email: "hoangan.web@gmail.com",
  age: 31,
};

console.log(Object.entries(user));
// console.log(Object.keys(user));

//Bài tập: Chuyển object sau thành dạng query string

var query = {
  keyword: "Hoàng An",
  category: 1,
  brand: 1,
  province: "Hà Nội",
};

//Chuyển thành chuỗi như sau
/*
keyword=Hoàng+An&category=1&brand=1&province=Hà+Nội

Lưu ý: Không dùng thư viện, hàm UrlSearchParams()
*/
var queryString = Object.entries(query)
  .map(function (element) {
    return element.join("=");
  })
  .join("&")
  .replaceAll(" ", "+");
console.log(queryString);

//Bài 2: Chuyển queryString trên thành object

/*
{
  keyword: "Hoàng An",
  category: 1,
  brand: 1,
  province: "Hà Nội",
};
*/

// var query = queryString.split("&").map(function (element) {
//   var elementArr = element.split("=");

//   elementArr[1] = elementArr[1].replaceAll("+", " ");

//   return elementArr;
// });

// query = Object.fromEntries(query);
// console.log(query);

Array.prototype.map2 = function (callback) {
  //Code
  if (typeof callback !== "function") {
    return;
  }

  var newArr = [];
  for (var index = 0; index < this.length; index++) {
    var value = this[index];
    var result = callback(value, index);
    newArr[newArr.length] = result;
  }

  return newArr;
};

var users = ["An", "Tuấn", "Đạt", "Tùng"];

var output = users.map2(function (user, index) {
  //   console.log(user, index);
  return `<h3>${index} - ${user}</h3>`;
});

// console.log(output);

//Object.create(null) => Tạo ra 1 object không có prototype
// var user = {};
// console.log(user);
// var user = Object.create(null);
// console.log(user);

//Tham chiếu trong object
var a = {
  name: "Hoàng An",
  email: "hoangan.web@gmail.com",
};

// var b = a;
// var b = Object.assign({}, a); //Shallow copy
var b = JSON.parse(JSON.stringify(a)); //Deep copy

b.name = "Hoàng An F8";

// console.log(a, b);

//Optional Chaining (?.)

//1. Optional Chaining với thuộc tính
// var a = {};
// console.log(a?.name?.job);

// var fullname = [1, 2, 3];
// if (fullname?.length) {
//   console.log("ok");
// }

//2. Optional Chaining với phương thức
// var a = {};

// a.getName?.();

//Case thực tế
var users = [1, 2, 3];
if (users?.length) {
  users.forEach?.(function (user) {
    console.log(user);
  });
}
