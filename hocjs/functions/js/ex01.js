/*
- Hàm là cú pháp trong lập trình
- Hàm thể hiện 1 chức năng (Động từ)
- Hàm là 1 kỹ thuật gom nhóm các chương trình con để thuận tiện trong quá trình tái sử dụng

1. Hàm có tham số, không tham số
Định nghĩa hàm
function tenHam() {
    Nội dung hàm
}

function tenHam(thamso1, thamso2,...) {
    Nội dung hàm
}

Gọi hàm

tenHam()

tenHam(doiso1, doiso2,...)

2. Hàm có giá trị trả về, không có giá trị trả về

- Hàm có giá trị trả về: Phải có từ khóa return

- Hàm không có giá trị trả về: Không có từ khóa return (Trả về giá trị undefined)
=> Hàm không có giá trị thường được gọi là hàm void
*/

function getMessage(msg, type = "success") {
  console.log("Tôi là Hoàng An: " + msg);
  console.log("Type = " + type);
}

getMessage("F8");

//Viết hàm tính tổng sum(a, b)

function sum(a, b) {
  var total = a + b;
  console.log("F8");
  return total;
  console.log("Hoàng An");
}

console.log(sum(10, 20));

function division(a, b) {
  if (b !== 0) {
    return a / b;
  }

  return false;
}

console.log(division(10, 0));
