//Math => Đối tượng toán học

console.log(Math);

//1. abs() => Lấy trị tuyệt đối
// console.log(Math.abs("-10"));
// console.log(Math.abs("10"));

//2. ceil() => Luôn làm tròn lên
// console.log(Math.ceil(10.1));

//3. floor() => Luôn làm tròn xuống
// console.log(Math.floor(10.9));

//4. round() => Làm tròn theo nguyên tắc làm tròn
// console.log(Math.round(10.4));

//5. min(), max() => Tìm giá trị nhỏ nhất, lớn nhất
// console.log(Math.min(5, 9, 1, -1));
// console.log(Math.max(5, 9, 1, -1));
// console.log(Math.min());
// console.log(Math.max());

//6. random() => Trả về số ngẫu nhiên > 0 và < 1
console.log(Math.random());

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */

//Lấy random từ min đến max (Số nguyên)
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(0, 1));
