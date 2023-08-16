var users = ["An", "Dương", "Vương", "Tuấn", "Đạt", "Tuấn"];

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

var query = [
  ["name", "F8"],

  ["keyword", "Fullstack"],

  ["category", 1],
];

console.log(query);

//Convert mảng trên thành chuỗi như sau

//name=F8&keyword=Fullstack&category=1

var result = query
  .map(function (value) {
    return value.join("=");
  })
  .join("&");

console.log(result);
