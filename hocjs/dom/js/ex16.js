//Lắng nghe sự kiện scroll (Kéo thanh cuộn trình duyệt)

// window.addEventListener("scroll", function () {
//   //Lấy tọa độ khi kéo thanh cuộn
//   var x = window.scrollX;
//   var y = window.scrollY;

//   console.log(`x = ${x}`, `y = ${y}`);
// });

// var gotoBtn = document.querySelector(".goto");
// gotoBtn.addEventListener("click", function () {
//   //Thiết lập di chuyển thanh cuộn tới vị trí mong muốn
//   //   window.scroll(0, document.body.clientHeight);
//   window.scroll({
//     top: document.body.clientHeight,
//     left: document.body.clientWidth,
//     behavior: "smooth",
//   });
// });

//Xử lý back to top
// var topBtn = document.querySelector(".top");
// window.addEventListener("scroll", function () {
//   var y = window.scrollY;
//   if (y >= 50) {
//     topBtn.classList.add("show");
//   } else {
//     topBtn.classList.remove("show");
//   }
// });

// topBtn.addEventListener("click", function () {
//   window.scroll({
//     top: 0,
//     behavior: "smooth",
//   });
// });

var header = document.querySelector(".header");
var headerInner = header.children[0];
var headerNav = header.children[1];
var headerInnerHeight = headerInner.clientHeight;
var headerNavHeight = headerNav.clientHeight;

window.addEventListener("scroll", function () {
  var y = window.scrollY;
  if (y >= headerInnerHeight) {
    headerNav.classList.add("fixed");
    document.body.style.paddingTop = `${headerNavHeight}px`;
  } else {
    headerNav.classList.remove("fixed");
    document.body.style.paddingTop = "";
  }
});
