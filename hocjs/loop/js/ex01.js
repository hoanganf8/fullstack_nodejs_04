/*
Vòng lặp: Cú pháp trong lập trình, cho phép 1 đoạn chương trình lặp đi lặp theo số lần lặp nhất định

1. Vòng lặp xác định trc số lần lặp: for

for (bienchay; dieukiendung; buocnhay) {
    Nội dung
}

2. Vòng lặp không xác định trước: while, do while
*/

// for (var i = 1; i <= 10; i++) {
//   console.log(`Xin chào F8: ${i}`);
// }

// for (var i = 10; i >= 1; i--) {
//   console.log(`Xin chào F8: ${i}`);
// }

// for (var i = 1; i <= 10; i++) {
//   for (var j = 1; j <= 10; j++) {
//     console.log(`i = ${i} - j = ${j}`);
//   }
// }

//Bài 1: Tính giá trị biểu thức
//total = 1 + 2 + 3 + ... + n

// var n = 10;
// var total = 0;
// for (var i = 1; i <= n; i++) {
//   //   console.log(i);
//   total += i;
// }

// console.log(`Total = ${total}`);

//Bài 2: Tính trung bình cộng các số chẵn từ 1 đến N

//Tính tổng các số chẵn
//Đếm số lượng số chẵn
//Kết quả = tổng / số lượng

// var n = 21;
// var total = 0,
//   count = 0,
//   avg;

// for (var i = 1; i <= n; i++) {
//   if (i % 2 === 0) {
//     total += i;
//     count++;
//   }
// }

// avg = total / count;
// console.log(`Trung bình cộng: ${avg}`);

//Bài 3: Kiểm tra 1 số n xem có phải là số nguyên tố hay không?
/*
- Số nguyên
- > 1
- CHỈ chia hết cho 1 và chính nó
*/

var check = true; //giả định là số nguyên tố
var n = 7;

if (n % 1 !== 0 || n <= 1) {
  check = false;
} else {
  for (var i = 2; i < n; i++) {
    if (n % i === 0) {
      check = false;
      //Thoát vòng lặp
      // break;
      i = n;
    }
  }
}
//Kỹ thuật đặt cờ hiệu (Cắm cờ)

console.log(check);
