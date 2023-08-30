//Number = Kiểu dữ liệu nguyên thủy

//Hàm tạo của number là Number

console.log([Number]);

// var a = 10;
// console.log(a, typeof a);

//Số NaN (Not A Number)
/*
NaN trả về trong các trường hợp sau
- Ép về kiểu số thất bại
- Các phép toán có toán hạng không phải là số (Trừ chuỗi số)

Khi thực hiện các phép toán số học: Các toán hạng sẽ được javascript tự động ép về kiểu số, nếu có toán hạng nào ép kiểu thất bại => Kết quả cuối cùng sẽ trả về NaN
*/
// var a = 10;
// // var b = "F8";
// var b = "8";
// var c = a - b;
// if (Number.isNaN(c)) {
//   console.log("Không phải số");
// } else {
//   console.log(c);
// }

//Số Infinity

//Số này sẽ xuất hiện khi bị tràn bộ nhớ lưu trữ
// var a = 1000 ** 1000;

// var b = 1000 ** 2000;

// console.log(a === b);

// var a = 1000 ** 1000 * -1;
// console.log(a);
// if (a !== Infinity) {
//   console.log(a);
// } else {
//   console.log("Không xử lý được");
// }

//Ép kiểu
// var a = "123.5a123";
var a = "";

//1. Ép kiểu số nguyên
// a = Number.parseInt(a);

//2. Ép kiểu số thực
// a = Number.parseFloat(a);

//3. Ép kiểu số (Thực, Nguyên)
// a = Number(a);
// a = +a;

// console.log(a);

/*
Bài tập: Cho trước 1 mảng, yêu cầu tính tổng các số chẵn. Không tính được => Trả về null
*/
var numbers = [
  1,
  5,
  9,
  "2",
  8,
  "a",
  undefined,
  null,
  NaN,
  Infinity,
  -Infinity,
  true,
  false,
];

var total = 0;
numbers.forEach(function (item) {
  if (item !== true) {
    item = Number(item);
    if (!Number.isNaN(item) && item % 2 !== 0 && Math.abs(item) !== Infinity) {
      //   console.log(item);
      total += item;
    }
  }
});

// console.log(total);

//Kiểm tra 1 số nguyên
var a = 123.5;
// console.log(Number.isInteger(a));

//Bài tập: Kiểm tra 1 số không phải số nguyên
if (
  typeof a === "number" &&
  !Number.isNaN(a) &&
  Math.abs(a) !== Infinity &&
  !Number.isInteger(a)
) {
  console.log("Không phải số nguyên");
}

//Lấy chữ số phần thập phân
//Dùng hàm toFixed(number) => Trả về 1 chuỗi
var a = 12.5678;
a = a.toFixed(0);
console.log(a);

//Định dạng tiền tệ
var price = 12340000.67;
price = price.toLocaleString("vi", {
  style: "currency",
  currency: "EUR",
});
console.log(price);
