//Các phương thức xử lý mảng
console.log(Array.prototype);

var users = ["An", "Dương", "Vương", "Tuấn", "Đạt", "Tuấn"];
console.log(users);

//1. at(index) => Lấy phần tử mảng theo index
// console.log(users.at(1));

//2. concat(arr1, arr2,...) => Nối mảng và trả về 1 mảng mới
// console.log(users.concat(["a", "b", "c"], [1, 2, 3]));
// console.log(users.concat("Tùng"));

//3. indexOf(value) => Tìm vị trí xuất hiện đầu tiên của phần tử trong mảng
// console.log(users.indexOf("Tuấn"));

//4. lastIndexOf(value) => Tìm vị trí xuất hiện cuối cùng của phần tử trong mảng
// console.log(users.lastIndexOf("Tuấn"));

//5. includes(value) => Tìm phần tử trong mảng và trả về true/false
// console.log(users.includes("Tuấn"));

//6. slice(start, end) => Cắt mảng và trả về 1 mảng mới
// console.log(users.slice(2, 4));
// console.log(users.slice(2));
// console.log(users.slice(-2));

//7. join(sep) => Nối các phần tử mảng thành 1 chuỗi và có ký hiệu nối
// console.log(users.join(" "));

//Bài tập: Lấy tên của họ và tên (Dùng mảng)
// var fullname = "Tạ Hoàng An"; //An
// var firstName = fullname.split(" ").slice(-1).join();
// console.log(firstName);

//8. push() => Thêm phần tử vào cuối mảng, thay đổi mảng ban đầu, hàm này trả về số lượng phần tử sau khi thêm
// var count = users.push("A", "B", "C");
// console.log(count);
// console.log(users);

//9. unshift() => Thêm phần tử vào đầu mảng và trả về số lượng phần tử sau khi thêm
// var count = users.unshift("A", "B", "C");
// console.log(count);
// console.log(users);

//10. pop() => Xóa phần tử cuối mảng và trả về giá trị phần tử vừa xóa
// var value = users.pop();
// console.log(users);
// console.log(value);

//11. shift() => Xóa phần tử đầu mảng và trả về giá trị phần tử vừa xóa
// var value = users.shift();
// console.log(users);
// console.log(value);

//12. splice(index, number) => Xóa number phần tử từ vị trí index
// var result = users.splice(1, 2, "A", "B", "C");
// console.log(users);
// console.log(result);

//13. sort() => Sắp xếp mảng theo thứ tự tăng dần (Chỉ sắp xếp chuỗi)
// users.sort();
// console.log(users);

// var numbers = [1, 10, 100, 3, 8];
// numbers.sort(function (a, b) {
//   //   console.log(a, b);
//   //b = số trước
//   //a = số sau
//   //   if (b > a) {
//   //     return -1;
//   //     //return về số âm => đổi chỗ
//   //   }
//   return a - b;
// });
// console.log(numbers);

var customers = [
  "Nguyễn Hoàng An",
  "Hoàng Văn Thanh",
  "Đặng Ngọc Khải",
  "Nguyễn Chi Nam",
];

//Sắp xếp danh sách khách hàng tăng dần theo tên

var getFirstName = function (fullname) {
  return fullname.split(" ").slice(-1).join();
};

customers.sort(function (next, prev) {
  if (getFirstName(prev) > getFirstName(next)) {
    return -1;
  }
});

console.log(customers);
