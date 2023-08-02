/*
1. Toán tử số học
+, -, *, /, % (Chia lấy dư), ** (Lũy thừa)
++, -- => Phép tăng, phép giảm
*/
// var a = "10.5";
// var b = 20;
// // var c = parseInt(a) + parseInt(b); //Ép về số nguyên

// var c = +a + +b;
// console.log(c);

// var count = 1;
// count++; //count = count + 1
// ++count; //count = count + 1
// var total = count++;
// var total = ++count;
// console.log(`Count = ${count}`);
// console.log(`Total = ${total}`);

// console.log(`Count = ${++count}`);
// var total = count++ + ++count;
// console.log(total);

/*
2. Toán tử logic
- Dùng để so sánh
- Chỉ trả về kiểu boolean (true, false)
>, <, >=, <=, ==, ===, !=, !==
*/

// var a = 10;
// //var b = a == "10"; //Chỉ so sánh giá trị
// var b = a === "10"; //So sánh giá trị và kiểu dữ liệu
// console.log(b);

/*
3. Toán tử gán (=)
*/
// var a = 20;
// a += 10; // a = a + 10;
// a -= 10; // a = a - 10
// a /= 10; // a = a / 10
// a *= 10; // a = a * 10
// a %= 3; // a = a % 3
// console.log(a);

// var title = "Hoàng An";
// title += " F8";
// title += " F8";
// title += " F8";
// title += " F8";
// console.log(title);

/*
4. Toán tử kết hợp
&& => và => Tất cả các biểu thức con đúng => Biểu thức cha sẽ đúng

|| => hoặc => Chỉ cần 1 biểu thức đúng => Biểu thức cha sẽ đúng
! => phủ định => Ngược lại
*/

// var a = 10;
// var b = a <= 10 || a > 100;
// b = !b;
// console.log(b);

/*
5. Toán tử 3 ngôi

dieukien ? giatridung : giatrisai
*/

// var a = 9;
// var b = a >= 10 ? "F8" : "Hoàng An";
// console.log(b);

// var a = 10;
// var total = 1 + 2 + 3 + (a >= 10 ? 5 : 10) + 4 + 5;

// console.log(total);

/*
6. Toán tử nullish (??)
*/

// var a = 0;
// var b = a ?? "F8"; //Check undefined và null
/*
Nếu a !== null và a !== undefined => Lấy trước ??
Ngược lại, lấy sau ??
*/
// console.log(b);
//Bài tập: Viết lại toán tử nullish bằng toán tử 3 ngôi

// var b = a !== null && a !== undefined ? a : "F8";
// var b = a === null || a === undefined ? "F8" : a;
// console.log(b);

// var a = "0" * 1;
// var b = a ? "F8" : "Hoàng An";
// console.log(b);

/*
Truthy và Falsy
=> Trong ngữ cảnh cần phải sử dụng kiểu boolean (so sánh), tự động chuyển các kiểu dữ liệu khác về true, false

1. Việc tự động chuyển về false => Gọi là falsy
0, "", false, undefined, null, NaN

2. Việc tự động chuyển về true => Gọi là truthy
Các trường hợp còn lại
*/

/*
7. Toán tử &&

Nếu truthy => Lấy giá trị sau &&
Ngược lại => Lấy giá trị trước &&
*/

// var a = null;
// var b = a && "F8";
// console.log(b);

/*
8. Toán tử ||
Truthy => Lấy trước ||
Ngược lại => Lấy sau ||
*/

var a = 10;
var b = a || "F8";
console.log(b);
