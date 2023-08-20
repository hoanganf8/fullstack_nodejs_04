// var users = ["An", "Dương", "Vương", "Tuấn", "Đạt", "Tuấn"];

//1. fill(value) => Thay đổi tất cả phần tử mảng thành 1 giá trị

// users.fill("F8");
// console.log(users);

//2. forEach(callback)
/*
- Duyệt qua từng phần tử của mảng
- Trả về phần tử và index trong callback
- Chỉ duyệt, không trả về giá trị, không dừng được
*/
// users.forEach(function (value, index) {
//   console.log(value, index);
// });

//3. map(callback)

/*
- Vòng lặp này sẽ trả về 1 mảng mới
- Số lượng phần tử của mảng mới luôn bằng số lượng phần tử của mảng ban đầu
- Giá trị phần tử của mảng mới phụ thuộc vào return của callback
*/
// var newArr = users.map(function (value, index) {
//   console.log(value, index);
//   return `<h3>${index} - ${value}</h3>`;
// });

// console.log(newArr);

// var html = `<ul>
// ${users
//   .map(function (user) {
//     return `<li>${user}</li>`;
//   })
//   .join("")}
// </ul>`;
// document.write(html);

// var query = [
//   ["name", "F8"],

//   ["keyword", "Fullstack"],

//   ["category", 1],
// ];

// console.log(query);

// //Convert mảng trên thành chuỗi như sau

// //name=F8&keyword=Fullstack&category=1

// var result = query
//   .map(function (value) {
//     return value.join("=");
//   })
//   .join("&");

// console.log(result);

//4. filter(callback)
/*
- callback có 2 tham số: value và index
- Trả về 1 mảng mới
- Mảng mới phụ thuộc vào return true của callback
*/
var numbers = [5, 1, 2, 9, 6, 8, 2];
// var results = numbers.filter(function (number) {
//   if (number >= 3) {
//     return true;
//   }
// });

// console.log(results);
// console.log(numbers);
//Bài tập 1: Lấy ra các số chẵn
var resuts = numbers
  .filter(function (number) {
    // console.log(number);
    if (number % 2 === 0) {
      // numbers.splice(index, 1);
      return true;
    }
    return number % 2 === 0;
  })
  .filter(function (item) {
    // console.log(item);
    var index = numbers.indexOf(item);
    if (index !== -1) {
      numbers.splice(index, 1);
    }

    return true;
  });
// console.log(resuts);
// console.log(numbers);

//Bài tập 2: Xóa các số chẵn của mảng ban đầu (numbers)
/*
Trả về 1 mảng số chẵn
Xóa các phần tử là số chẵn của mảng ban đầu
*/

//Bài tập 3: Lọc tên theo từ khóa
// var customers = [
//   "Tạ Hoàng An",
//   "Lưu Anh Quân",
//   "Nguyễn Xuân Tuấn Anh",
//   "Hoàng Văn Thanh",
//   "Phạm Hoàng Anh",
//   "Trần Đình Quý",
//   "Nguyễn Chi Nam",
// ];

// var keyword = "hoàng";

// var results = customers.filter(function (customer) {
//   return customer.toLowerCase().includes(keyword.toLowerCase());
// });
// console.log(results);

//5. find(callback)
/*
Cách hoạt động giống filter nhưng sẽ trả về phần tử mảng đầu tiên
*/

//6. findLast()
/*
Cách hoạt động giống filter nhưng sẽ trả về phần tử mảng cuối cùng
*/

//7. findIndex()
/*
Cách hoạt động giống find nhưng sẽ trả về index
*/

//8. findLastIndex()
/*
Cách động giống findLast nhưng sẽ trả về index
*/

// var numbers = [1, 2, 3, 4, 5, 6, 7];
// console.log(numbers);
// var result = numbers.findLastIndex(function (number) {
//   return number >= 3;
// });
// console.log(result);

// //Bài tập:
// var users = [
//   ["Hoàng An", "hoangan.web@gmail.com"],
//   ["Tuấn Anh", "tuananh@gmail.com"],
//   ["Nguyễn Dương", "duong@gmail.com"],
//   ["Chi Nam", "chinam@gmail.com"],
// ];

// console.log(users);

// var email = "tuananh@gmail.com";

// //Yêu cầu: Xóa user có email như trên
// var index = users.findIndex(function (user) {
//   return user[1] === email;
// });

// if (index !== -1) {
//   users.splice(index, 1);
// }
// console.log(users);

//9. some(callback)
/*
- Hàm này sẽ trả về true nếu có ít nhất 1 lần callback return true
- Trả về false nếu không có lần nào callback return true
*/

// var numbers = [1, 3, 5, 9, 8];
// //Kiểm tra mảng trên có số chẵn hay không?
// var check = numbers.some(function (number) {
//   // if (number % 2 === 0) {
//   //   return true;
//   // }
//   return number % 2 === 0;
// });
// console.log(check);

//10. every
/*
- Hàm này trả về true khi tất cả các lần lặp return true
- Trả về false khi có ít nhất 1 lần không return true
*/
var numbers = [1, 3, 5, 7, 9];
//Kiểm tra xem mảng này có tất cả là số lẻ ko?
var check = numbers.every(function (number) {
  if (number % 2 !== 0) {
    return true;
  }
});
console.log(check);
