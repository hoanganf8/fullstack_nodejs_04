//DOM Navigation

//1. Chọn thành phần cha: parentElement

//2. Chọn thành phần con: children -> Trả về 1 danh sách

//3. Chọn thành phần anh em:

/*
- Ngang hàng
- Liền kề sau:
- Liền kề trước: 
*/

var title = document.querySelector(".title");

//Chọn thành phần cha gần nhất: parentElement
// console.log(title.parentElement);
// console.log(title.parentElement.parentElement);
// console.log(title.parentElement.parentElement.parentElement);

// var menu = document.querySelector(".menu");
// console.log(menu);
// console.log(menu.children[1].children[1].children[0].innerText);

var menuItems = document.querySelectorAll(".menu li");
menuItems.forEach(function (menuItem) {
  if (menuItem.children.length === 2) {
    menuItem.classList.add("has-children");
    var link = menuItem.children[0];
    link.addEventListener("click", function (e) {
      e.preventDefault();
      if (!menuItem.children[1].classList.contains("open")) {
        var subMenuOpen = document.querySelector(".menu ul.open");
        if (subMenuOpen !== null) {
          subMenuOpen.classList.remove("open");
          subMenuOpen.parentElement.classList.remove("icon-open");
        }
      }
      menuItem.classList.toggle("icon-open");
      menuItem.children[1].classList.toggle("open");
    });
  }
});

var active = document.querySelector(".lists .active");
var next = active.nextElementSibling;
console.log(next);

var last = document.querySelector(".lists .last");
var prev = last.previousElementSibling;
console.log(prev);

/*
- parentNode
- childNodes
- nextSibling
- previousSibling

-> học ở phần DOM Nodes
*/

var lists = document.querySelector(".lists");
//Lấy element đầu tiên
var first = lists.firstElementChild;
console.log(first);

//Lấy element cuối cùng
var last = lists.lastElementChild;
console.log(last);
