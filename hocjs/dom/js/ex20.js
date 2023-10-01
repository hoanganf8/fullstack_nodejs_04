//Trigger Event -> Tự kích hoạt 1 sự kiện mà không cần tác động của người dùng
/*
1. Dùng các phương thức có sẵn: click(), submit(), focus(),... -> Giới hạn 1 số sự kiện

2. Dùng dispatchEvent() -> Áp dụng với tất cả sự kiện
*/

var btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
  console.log("Hello F8");
});

// setInterval(function () {
//   btn.click();
// }, 1000);

// var search = document.querySelector(".search");
// search.focus();

var quantity = document.querySelector(".quantity input");
var minusBtn = quantity.previousElementSibling;
var plusBtn = quantity.nextElementSibling;

var changeEvent = new Event("change");

quantity.addEventListener("change", function () {
  var value = this.value;
  console.log(value);
});

minusBtn.addEventListener("click", function () {
  quantity.value--;
  quantity.dispatchEvent(changeEvent);
});

plusBtn.addEventListener("click", function () {
  quantity.value++;
  quantity.dispatchEvent(changeEvent);
});
