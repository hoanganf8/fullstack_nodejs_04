// HTMLElement.prototype.css = function (style = {}) {
//   Object.assign(this.style, style);
// };

// var content = document.querySelector(".content");

// content.css({
//   color: "red",
//   fontWeight: "bold",
// });

// console.log([content]);

//Web Component -> Tạo ra các thành phần cho trang web: header, footer, slidebar, carousel -> Dưới dạng thẻ html riêng

/*
- customElements
- Kế thừa từ HTMLElement: Cách kế thừa, vòng đời component (Lifecycle Callback)
- Shadow DOM -> Đóng gói và tách biệt ra khỏi DOM thật
- Template và Slot
*/

var HelloWorld = function () {
  //Kế thừa từ HTMLElement
  return Reflect.construct(HTMLElement, [], HelloWorld); //Thay thế super() trong class
};

HelloWorld.prototype = Object.create(HTMLElement.prototype); //Tạo prototype cho HelloWorld lấy từ HTMLElement

//Khi thẻ html được hình thành
HelloWorld.prototype.connectedCallback = function () {
  var name = this.getAttribute("name");
  var email = this.getAttribute("email");
  var borderWidth = this.getAttribute("border-width");
  var borderColor = this.getAttribute("border-color");
  var borderRadius = this.getAttribute("border-radius");
  var html = `<div class="box">
    <h1>Học lập trình không khó</h1>
    <h2>${name}</h2>
    <h2>${email}</h2>
  </div>`;
  var shadow = this.attachShadow({
    mode: "open",
  });

  shadow.innerHTML = html;
  var style = document.createElement("style");
  style.textContent = `
    .box {
        border: ${borderWidth ?? 0} solid ${borderColor ?? "#000"};
        border-radius: ${borderRadius ?? 0};
        padding: 15px;
    }
  `;
  shadow.prepend(style);
};

customElements.define("hello-world", HelloWorld);
