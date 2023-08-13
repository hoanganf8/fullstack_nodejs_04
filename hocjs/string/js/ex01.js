/*
Chuỗi (String): Kiểu dữ liệu nguyên thủy
- Tập hợp các ký tự
- Để xử lý chuỗi: 
+ Học các hàm xử lý chuỗi
+ Tìm hiểu các giải thuật liên quan đến xử lý chuỗi
+ Cách đọc từng ký tự trong chuỗi

Để có các hàm xử lý chuỗi => Javascript có 1 hàm tạo liên quan đến chuỗi có tên là String

Lưu ý: Đa số kiểu dữ liệu trong JS đều có hàm tạo
*/

console.log(String.prototype);

// //Khai báo 1 chuỗi
// var fullname = "Tạ Hoàng An";
// console.log(fullname, typeof fullname);
// console.log(fullname.length); //Độ dài của chuỗi

// var fullname2 = String("Tạ Hoàng An");
// console.log(fullname2, typeof fullname2);

// var fullname3 = new String("Tạ Hoàng An"); //Khai báo như 1 đối tượng
// console.log(fullname3, typeof fullname3);

//Các thuộc tính, phương thức xử lý chuỗi

var str = "Hoàng An F8 Fullstack F8";

//1. length => Trả về độ dài của chuỗi
// console.log(str.length);

//2. charAt(index) => Trả về ký tự theo index (index bắt đầu từ 0)
// console.log(str.charAt(1));
// for (var i = 0; i < str.length; i++) {
//   console.log(str.charAt(i));
// }

//3. charCodeAt(index) => Trả về mã ASCII của ký tự theo index
// console.log(str.charCodeAt(0));

//4. concat(value1, value2,...) => nối nhiều chuỗi
// console.log(str.concat("A", "B", "C"));

//5. indexOf(value) => Tìm vị trí xuất hiện đầu tiên của chuỗi con trong chuỗi cha. Nếu không tìm thấy trả về -1
// console.log(str.indexOf("F8"));

//6. lastIndexOf(value) => Tìm vị trí cuối cùng
// console.log(str.lastIndexOf("F8"));

//7. includes(value) => Tìm chuỗi con trong chuỗi cha và trả về true/false
// console.log(str.includes("F8"));

//8, slice(start, end) => Cắt chuỗi từ index đến end

// console.log(str.slice(2, 10));
// console.log(str.slice(9));
// console.log(str.slice(-5));

//Bài tập: Cắt username của email
// var email = "hoangan.web@gmail.com";
// var position = email.indexOf("@");
// var username = email.slice(0, position);
// console.log(username);

//9. replace(search, with) => Tìm kiếm và thay thế chuỗi đầu tiên tìm được
// console.log(str.replace("F8", "F88"));
/*
Lưu ý: hàm replace hỗ trợ thay thế dựa vào biểu thức chính quy (Regular Expression, Regex)
*/
// var content = "Tạ Hoàng An 0388875179 Giảng viên tại F8, số khác +84358789432";
// var pattern = /((0|\+84)\d{9})/g;
// console.log(
//   content.replace(pattern, '<a href="https://zalo.me/$1">Số Zalo: $1</a>'),
// );

//10. replaceAll(search, with) => Thay thế tất cả
// console.log(str.replaceAll("F8", "F88"));

//11. split(value) => Tách chuỗi thành mảng dựa vào ký tự phân cách
// console.log(str.split(" "));

//12. toLowerCase() => Chuyển chuỗi thành chữ thường
console.log(str.toLowerCase());

//13. toUpperCase() => Chuyển chuỗi thành chữ hoa
console.log(str.toUpperCase());

//14. trim() => Loại bỏ khoảng trắng đầu và cuối chuỗi
// var str = "     HOÀNG AN      ";
// console.log(str);
// console.log(str.trim());

//15. trimStart() =>  Loại bỏ khoảng trắng đầu chuỗi

//16. trimEnd() => Loại bỏ khoảng trắng cuối chuỗi

//17. match() => Cắt chuỗi dựa vào biểu thức chính quy

var content = `Lorem hoangan.web@gmail.com Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum hoangan@fullstack.edu.vn has been the industry's standard dummy text ever since the 1500s, when an unknown info@vnexpress.net printer took a galley of type and scrambled it to make a type specimen book`;

var pattern = /@[a-z-_\.0-9]+\.[a-z]{2,}/g;
var results = content.match(pattern);
for (var i = 0; i < results.length; i++) {
  var domain = results[i].replace("@", "");
  console.log(domain);
}
