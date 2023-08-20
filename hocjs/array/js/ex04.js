//Vòng lặp reduce
/*
Vòng lặp reduce có 2 tham số
- callback: Nhận vào 3 tham số
+ prevValue: 
++ Nếu không có giá trị khởi tạo => prev lần đầu là phần tử đầu tiên
++ Nếu có giá trị khởi tạo => prev là giá trị khởi tạo
++ return của lần trước => prev của lần sau
+ currentValue: Value của từng phần tử mảng
+ index: Index của từng phần tử mảng
- initialValue => Giá trị khởi tạo

=> Giá trị trả về của reduce là giá trị return cuối cùng của callback
*/
// var numbers = [5, 10, 15, 20, 25];
// console.log(numbers);
// var result = numbers.reduce(function (prev, current, index) {
//   console.log(prev, current);
//   return current;
// }, 0);
// console.log(result);

//Tính tổng các phần tử trong mảng
// var numbers = [5, 10, 15, 20, 25];
// var result = numbers.reduce(function (prev, current) {
//   console.log(prev, current);
//   return prev + current;
// }, 0);
// console.log(result);

//Tìm max sử dụng reduce
// var numbers = [5, 2, 1, 9, 8];
// var max = numbers.reduce(function (prev, current) {
//   return prev < current ? current : prev;
// });
// console.log(max);

//Tìm phần tử khác nhau giữa 2 mảng
var arr1 = [5, 2, 1, 9, 8];
var arr2 = [2, 1, 8, 3];

/*
Kết quả: [5, 9]

Yêu cầu: Dùng reduce

Ý tưởng: 
- Duyệt qua từng phần tử của mảng arr1
- Kiểm tra từng phần tử xem có nằm trong mảng arr2 không?
- Nếu có => Bỏ qua
- Nếu không => Thêm vào 1 mảng mới

Tìm cú pháp: reduce
*/
var diff = arr1.reduce(function (prev, current) {
  if (!arr2.includes(current)) {
    prev.push(current);
  }
  //   !arr2.includes(current) && prev.push(current);
  //   return !arr2.includes(current) && prev.push(current), prev;
  return prev;
}, []);
console.log(diff);
