//Event Object
//-> Object để mô tả thông tin của 1 sự kiện
//-> Mỗi nhóm sự kiện có thông tin mô tả khác nhau

// var title = document.querySelector(".title");
var btn = document.querySelector(".btn");
// var name = document.querySelector(".name");

// title.addEventListener("mousedown", function (e) {
//   //e = event object
//   console.log(e);
//   //   console.log(e.target);
//   //   console.log(this);
// });

//Xác định hành động kéo

var offsetX = 0;
var offsetY = 0;

var handleDrag = function (e) {
  var x = e.clientX;
  var y = e.clientY;
  Object.assign(btn.style, {
    position: "fixed",
    top: `${y - offsetY}px`,
    left: `${x - offsetX}px`,
  });
};

btn.addEventListener("mousedown", function (e) {
  offsetX = e.offsetX;
  offsetY = e.offsetY;
  //   btn.style.cursor = "move";
  document.addEventListener("mousemove", handleDrag);
});

document.addEventListener("mouseup", function () {
  document.removeEventListener("mousemove", handleDrag);
});

//Hành động mặc định của trình duyệt
/*
- click vào thẻ a => chuyển trang
- submit form => chuyển hướng tới action
- Chuột phải => Xuất hiện menu

=> Chặn các hành động mặc định

=> preventDefault()
*/
var link = document.querySelector(".link");
link.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(this.href);
});

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  alert("Không được bấm chuột phải");
});

btn.addEventListener("click", function (e) {
  e.stopPropagation(); //Chặn nổi bọt của thẻ html con
  this.style.background = "green";
  console.log("Btn click");
});

document.addEventListener("click", function () {
  btn.style.background = "initial";
  console.log("Document click");
});
