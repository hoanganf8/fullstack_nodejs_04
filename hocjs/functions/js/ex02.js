/*
Biến toàn cục (Global Variable)
- Khai báo ở ngoài hàm
- Sử dụng ở khắp mọi nơi

Biến cục bộ (Local Variable)
- Khai báo trong phạm vi hàm
- Chỉ được sử dụng trong hàm đó và các hàm con
*/

// function sum(a, b) {
//   //function scope
//   var total = a + b;
//   //Biến cục bộ
//   return total;
// }

// function getMsg() {
//   return msg;
// }

// function setMsg(value) {
//   msg = value;
//   //   console.log(msg);
// }

//Biến toàn cục phải khai báo trước khi gọi hàm
// var msg;
// msg = "Hoàng An F8";

// setMsg("Fullstack");

// console.log(getMsg());

function max() {
  //   console.log(arguments);
  if (arguments.length) {
    var result = arguments[0];
    for (var i = 0; i < arguments.length; i++) {
      var value = arguments[i];
      //arguments[index]
      if (result < value) {
        result = value;
      }
    }

    return result;
  }

  return false;
}

// console.log(max(5, 10, 15, 20, 100, 25, 30, 35, 40));
// console.log(max());
//Bài tập: Hoàn thiện hàm max()

//rest parameters
function concat(str, ...args) {
  str += ""; //Ép biến str thành chuỗi
  if (args.length) {
    for (var i = 0; i < args.length; i++) {
      str += args[i];
    }
  }

  return str;
}

console.log(concat("Hoàng An", "F8", "F9", "F10", "F11"));
//Bài tập: Hoàn thiện hàm concat
