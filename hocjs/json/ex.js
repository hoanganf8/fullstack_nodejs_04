/*
JSON = JavaScript Object Notation

- Giao tiếp dữ liệu giữa các nền tảng với nhau
- JSON dùng để mô tả dữ liệu 1 cách toàn vẹn
- JSON hỗ trợ hầu hết các ngôn ngữ lập trình
- JSON là chuỗi
- JSON có thể mô tả tất cả các kiểu dữ liệu

Khi làm việc với JSON, có 2 thao tác

1. Chuyển từ các kiểu dữ liệu thành JSON
JSON.stringify(variable)

2. Chuyển từ JSON thành các kiểu dữ liệu tương ứng
JSON.parse(variable)
*/

var users = [
  {
    id: 1,
    name: "Hoàng An",
  },
  {
    id: 2,
    name: "Nguyễn Dương",
  },
];

// var json = JSON.stringify(users);
// console.log(json, typeof json);

var json =
  '[{"id":1,"name":"Ho\u00e0ng An"},{"id":2,"name":"Nguy\u1ec5n D\u01b0\u01a1ng"},{"id":3,"name":"L\u01b0u Anh Qu\u00e2n"}]';

var users = JSON.parse(json);
console.log(users);

console.log(JSON);
