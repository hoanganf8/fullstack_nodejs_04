// var content = document.querySelector(".content");

// var handeClick = function () {
//   var btn = content.querySelector(".btn");
//   btn.addEventListener("click", function () {
//     content.innerHTML += `<h1>Fullstack - F8</h1>`;
//     handeClick();
//   });
// };

// handeClick();

// content.addEventListener("click", function (e) {
//   //   console.log(e.target);
//   //   console.log(this);
//   if (e.target.classList.contains("btn")) {
//     content.innerHTML += `<h1>Fullstack - F8</h1>`;
//   }
// });

var root = document.querySelector("#root");

//Tạo element
var h1 = document.createElement("h1");
h1.innerText = "Fullstack - F8";
h1.id = "title";
h1.className = "title";

//Render element lên UI
//1. append() hoặc appendChild() -> Đẩy xuống dưới cùng
//2. prepend() -> Đẩy lên trên cùng

root.append(h1);

var h2 = document.createElement("h2");
h2.innerText = "Hello F8";
root.prepend(h2);

var btn = document.createElement("button");
btn.innerText = "Add";
root.append(btn);
var count = 0;
btn.addEventListener("click", function () {
  var p = document.createElement("p");
  p.innerText = `Công việc: ${++count}`;
  root.append(p);
  if (count === 5) {
    h1.style.color = "red";
    h1.innerText = "Hoàng An F8";
  }
});

/*
Tạo ra cặp thẻ ul, li như sau
<ul>
    <li class="item">Item 1</li>
    <li class="item">Item 2</li>
    <li class="item">Item 3</li>
    <li class="item">Item 4</li>
    <li class="item">Item 5</li>
</ul>

-> Sau đó thêm vào trong root (Trên cùng)
*/

var ul = document.createElement("ul");
for (var i = 1; i <= 5; i++) {
  var li = document.createElement("li");
  li.innerText = `Item ${i}`;
  ul.append(li);
}

root.prepend(ul);

//insertBefore()
var h3 = document.createElement("h3");
h3.innerText = "Hôm nay uống gì?";
root.insertBefore(h3, h1);

//Bài tập: Tạo 1 thẻ p có nội dung bất kỳ
// -> Chèn sau node h3 ở trên
var p = document.createElement("p");
p.innerText = "Học lập trình không khó";
root.insertBefore(p, h3.nextElementSibling);

//replaceChild() -> Thay thế node cũ bằng node mới
var h4 = document.createElement("h4");
h4.innerText = "Học lập trình để đi làm";
h4.style.color = "red";
root.replaceChild(h4, h2);

//h2 -> Được giải phóng
root.append(h2);

//removeChild() -> Xóa node con
root.removeChild(h2);
// h2.remove();
