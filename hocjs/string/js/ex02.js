// var fullname = "TẠ HOÀNG AN";
// //Kiểm tra chuỗi này có được viết hoa toàn bộ hay không?

// // var check = fullname === fullname.toUpperCase();
// var check = fullname.includes(fullname.toUpperCase());

// console.log(check);

var fullname = "NGUYỄN Anh Minh Dương";
//Chuyển họ và tên thành dạng tên chuẩn
//Tạ Hoàng An

fullname = fullname.toLowerCase();

fullname = fullname.charAt(0).toUpperCase() + fullname.slice(1);

for (var i = 1; i < fullname.length; i++) {
  var char = fullname.charAt(i);
  if (char === " ") {
    var index = i + 1; //index ký tự cần chuyển thành chữ hoa
    fullname =
      fullname.slice(0, index) +
      fullname.charAt(index).toUpperCase() +
      fullname.slice(index + 1);
  }
}

console.log(fullname);
