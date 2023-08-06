/*
Vòng lặp while
-> Lặp với số lần lặp không xác định trước
*/

var i = 1;
var total = 0;
while (i <= 10) {
  //   console.log(`Lần lặp thứ: ${i}`);
  total += i;
  i++;
}

console.log(`Total = ${total}`);

/*
while (true) {
    
}

Bài tập: Mô phỏng quá trình rút tiền ATM
*/

var money = 5350000;

//Trả về về số lượng theo từng mệnh giá

//10 x 500000
//1 x 200000
//1 x 100000
//1 x 50000
var a = 0,
  b = 0,
  c = 0,
  d = 0;

if (money % 50 === 0) {
  //   while (money > 0) {
  //     // if (money >= 500000) {
  //     //   a = money / 500000;
  //     //   a = a - (a % 1);
  //     //   money -= a * 500000;
  //     // }
  //     // if (200000 <= money < 500000) {
  //     //   b = money / 200000;
  //     //   b = b - (b % 1);
  //     //   money -= b * 200000;
  //     // }
  //     // if (100000 <= money < 200000) {
  //     //   c = money / 100000;
  //     //   c = c - (c % 1);
  //     //   money -= c * 100000;
  //     // }
  //     // if (money < 100000) {
  //     //   d = money / 50000;
  //     //   d = d - (d % 1);
  //     //   money -= d * 50000;
  //     // }

  //   }
  a = money / 500000; //Lấy số tờ theo mệnh giá 500.000
  a = a - (a % 1); //Lấy phần nguyên của 1 số
  money -= a * 500000; //Lấy số tiền còn lại

  b = money / 200000;
  b = b - (b % 1);

  money -= b * 200000;

  c = money / 100000;
  c = c - (c % 1);

  money -= c * 100000;

  d = money / 50000;
  d = d - (d % 1);

  money -= d * 50000;
}
console.log(a, b, c, d);

console.log("================");

var n = 1000;
var count = 0;
while (n % 2 === 0) {
  count++;
  n /= 2;
}

console.log(count);

//Thực tế: tìm số lần xuất hiện của 1 từ trong 1 đoạn văn

//Vòng lặp do while
//=> Giống while, chỉ khác thứ tự
/*
while: kiểm tra trước => chạy sau
do while: chạy trước => kiểm tra sau
*/
// var i = 10;
// do {
//   console.log(i);
// } while (i > 10);

console.log("======break, continue =====");
//break, continue
// for (var i = 1; i <= 10; i++) {
//   console.log(`Lần lặp thứ ${i}`);
//   if (i === 5) {
//     break;
//   }
// }

/*
break: 
- Hiệu năng chương trình
- Tính đúng của chương trình

Ví dụ: Tìm số chẵn nhỏ nhất trong khoảng từ begin đến end
*/

// var begin = 3;
// var end = 9;
// var result;
// for (var i = begin; i <= end; i++) {
//   if (i % 2 === 0) {
//     result = i;
//     break;
//     // i = end;
//   }
// }

// console.log(`Số chẵn nhỏ nhất = ${result}`);

//continue: Bỏ qua lần lặp

for (var i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }

  console.log(`Lần lặp thứ ${i}`);
}
