//Regular Expression -> Biểu thức chính quy
// -> Biểu thức để xử lý chuỗi nâng cao
// -> Xuất hiện ở hầu hết các ngôn ngữ lập trình
/*
3 tác dụng chính: 
- So khớp
- Cắt chuỗi
- Thay thế

Cấu trúc: 
const pattern = /regex/modifier
*/

const pattern = /[a-z0-9]@[0-9]/;
const str = "hoanganit19A@123";
const check = pattern.test(str);
console.log(check);

//Bài tập: Khớp địa chỉ email
/*
username@domain.ext

username: chữ thường, số, gạch ngang, gạch dưới, dấu chấm, độ dài >=3
domain: chữ thường, số, gạch ngang, gạch dưới, dấu chấm, độ dài >=1
ext: chữ thường, độ dài >=2
*/
