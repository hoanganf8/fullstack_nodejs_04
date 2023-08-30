//DOM Element: Quá trình tạo ra Element Node để thao tác với các thẻ html

//1. Truy xuất thông qua id

//document.getElementById(id) => Chỉ lấy element đầu tiên
// var title = document.getElementById("title");
// console.log(title);

//2. Truy xuất thông qua class

//document.getElementsByClassName(class)
//=> Trả về 1 danh sách các element có cùng class
//=> Muốn truy cập tới 1 element cụ thể => Lặp qua từng phần tử
// var titleList = document.getElementsByClassName("title");
// // console.log(titleList);
// console.log(titleList[0]);

//3. Truy cập thông qua tên thẻ html
//document.getElementsByTagName(tag)
//=> Trả về 1 danh sách
// var titleList = document.getElementsByTagName("h2");
// console.log(titleList);

//4. Truy cập thông qua selector css (Trả về phần tử đầu tiên)
//document.querySelector(selector)
// var title = document.querySelector(".title");
// console.log(title);

//5. Truy cập thông qua selector css (Trả về tất cả phần tử)
// var titleList = document.querySelectorAll(".title");
// console.log(titleList);

//Bài tập:
// var first = document.querySelector(".content .first");
// console.log(first);
// var last = document.querySelector(".content .last");
// console.log(last);

var content = document.querySelector(".js-content");
var first = content.querySelector(".first");
var last = content.querySelector(".last");

//Các trường hợp đặc biệt
/*
- Truy xuất vào thẻ head: document.head
- Truy xuất vào thẻ body: document.body
- Truy cập vào form và các field thông qua thuộc tính name
*/
var input = document.login_form.fullname;
console.log(input);
var btn = document.login_form.btn;
console.log(btn);
