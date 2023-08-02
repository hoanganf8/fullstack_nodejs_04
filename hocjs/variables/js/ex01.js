//Khai báo biến
/*
var tenbien;

- Tên biến chỉ được phép: chữ hoa, thường, dấu $, dấu gạch dưới, số
- Tên biến không được bắt đầu bằng số
- Đặt tên biến theo quy tắc camelCase
*/
var customer;
var customerEmail;
var customerShippingAddress;

var user, email, password;

var course = "Fullstack",
  price;

console.log(customer);
console.log(course);

//Hiển nội dung lên giao diện
//1. DOM => Học sau
//2. document.write()
// document.write(course);
var username = "Hoàng An F8";
// var title = "<h1>Tôi là " + username + "</h1>";
//backtick (`)
var title = `<h1>Tôi là ${username}</h1>
<h2>Khóa học Fullstack</h2>
<h2>Hà Nội</h2>`;
//=> Template String
document.write(title);
console.log(title);
