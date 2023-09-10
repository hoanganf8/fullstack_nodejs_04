//DOM CSS

// var content = document.querySelector(".content");

// console.log(content.style);

// content.style.color = "red";
// content.style.fontWeight = "bold"; //font-weight
// content.style.textTransform = "uppercase"; //text-transform

//tenthuoctinh: giatri

// var css = {
//   color: "red",
//   fontWeight: "bold",
//   fontStyle: "italic",
//   textTransform: "uppercase",
//   backgroundImage: `url("https://fastly.picsum.photos/id/947/536/354.jpg?hmac=SWrzGjeEE8tsTHphNhl2ma3QToFb3nDd5hLIbtWX69s")`,
//   transform: `translateX(20px)`,
// };

// Object.assign(content.style, css);

//Bài tập: Bổ sung thêm 2 thuộc tính
/*
background-image
transition
transform: translateX(20px)
*/

//Lấy giá trị thuộc tính CSS
// console.log(content.style.color);

var content = document.querySelector(".content");
var toggleBtn = document.querySelector(".toggle");

var time = 400;
toggleBtn.addEventListener("click", function () {
  var css = {
    transitionProperty: "opacity, visibility",
    transition: `${time}ms ease`,
  };

  Object.assign(content.style, css);

  if (content.style.opacity === "") {
    var cssFadeOut = {
      opacity: 0,
      visibility: "hidden",
    };

    Object.assign(content.style, cssFadeOut);

    setTimeout(function () {
      Object.assign(content.style, {
        height: 0,
        overflow: "hidden",
      });
    }, time);
  } else {
    var cssFadeIn = {
      opacity: "",
      visibility: "visible",
      height: "",
    };

    Object.assign(content.style, cssFadeIn);
  }
});
