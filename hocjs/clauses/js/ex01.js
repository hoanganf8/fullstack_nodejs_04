// console.log("Hoàng An");
// console.log("Hoàng An");
// console.log("Hoàng An");

var a = 9;
//Hiển thị đoạn code dưới theo điều kiện a >= 10

// if (a >= 10) {
//   console.log("F8");
//   console.log("F8");
//   console.log("F8");
// } else {
//   console.log("Không đúng");
// }

/*
1. Câu lệnh rẽ nhánh if else
2.1. Câu lệnh rẽ nhánh if thiếu

if (dieukien) {
    Nội dung
}

2.2. Câu lệnh rẽ nhánh if đủ

if (dieukien) {
    Nội dung đúng
} else {
    Nội dung sai
}

2.3. Câu lệnh if nhiều nhánh

if (dieukien1) {
    Nội dung nhánh 1
} else if (dieukien2) {
    Nội dung nhánh 2
} else if (dieukien3) {
    Nội dung nhánh 3
} else {
    Nội dung nhánh 4
}

2.4. Câu lệnh if lồng nhau

if (dieukien) {
    if (dieukien2) {

    } else {

    }
} else {

}

2. Câu lệnh rẽ nhánh switch case
*/

/*
Bài tập: Tính lương thực nhận sau khi đã trừ thuế

Bảng thuế: 
- Lương < 5tr => Thuế = 3%
- Lương từ 5tr đến 15tr => Thuế = 5%
- Lương trên 15tr => Thuế = 10%
*/
// var salary = 15000000;
// var tax;
// if (salary < 5000000) {
//   tax = 3;
// } else if (salary > 15000000) {
//   tax = 10;
// } else {
//   tax = 5;
// }

// // salary = salary - (tax * salary) / 100;
// salary = ((100 - tax) * salary) / 100;

// console.log(`Lương: ${salary}`);

// var a = 10.5;
// //Kiểm tra biến a có phải số nguyên hay không?

// // if (a % 1 === 0) {
// if (parseInt(a) === a) {
//   console.log(`Số nguyên`);
// } else {
//   console.log(`Không phải số nguyên`);
// }

var a = 5;
var b = 2;
var c = a / b; //Lấy phần nguyên
console.log(c);
