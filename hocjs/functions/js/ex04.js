// var showMessage = function (msg) {
//   var value = "Fullstack";
//   //Biến cục bộ của hàm cha
//   var display = function () {
//     console.log(`Xin chào F8: ${msg}`);
//     console.log(value);
//   };
//   display();
// };
// showMessage("Hoàng An");
/*
Tái sử dụng được các biến
- Tham số của hàm cha
- Biến toàn cục
- Biến cục bộ của hàm cha
*/

var sum = function (a) {
  return function (b) {
    return a + b;
  };
};
//Closure

var add = sum(10);
// console.log(add(20)); //10 + 20
// console.log(add(30)); //10 + 30
// console.log(add(40)); //10 + 40

// var showNumber = function (n) {
//   console.log(n);
//   if (n > 1) {
//     showNumber(n - 1);
//   }
// };
// //Giải thuật đệ quy
// showNumber(10);

// var getTotal = function (n) {
//   if (n === 1) {
//     return 1;
//   }

//   var total = n + getTotal(n - 1);

//   return total;
// };

// console.log(getTotal(10));

//10 + 9
// + 8
// + 7

var fibonaci = function (n) {
  if (n === 1 || n === 2) {
    return 1;
  }

  return fibonaci(n - 1) + fibonaci(n - 2);
};

// console.log(fibonaci(5));

/*
fibonaci(5) = fibonaci(4) + fibonaci(3)
fibonaci(3) + fibonaci(2) + fibonaci(2) + fibonaci(1)
fibonaci(2) + fibonaci(1) + 1 + 1 + 1
1 + 1 + 1 + 1 + 1 = 5
*/
