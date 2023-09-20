var todo = document.querySelector(".todo");
var todoForm = todo.querySelector("form");
var todoList = todo.querySelector(".todo-list");

todoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  var inputEl = this.children[0];

  var name = inputEl.value;

  //   var html = `<p>${name} <span>Xóa</span></p>`;

  //   todoList.innerHTML += html;

  var p = document.createElement("p");
  p.innerText = name;
  var span = document.createElement("span");
  span.innerText = "Xóa";
  span.addEventListener("click", function () {
    handleRemove(p);
  });
  p.append(span);

  todoList.append(p);

  inputEl.value = "";
});

var handleRemove = function (todo) {
  todo.remove();
};

//Comment node
var comment = document.createComment("Todo List");
todo.append(comment);

var content = document.querySelector(".content");
console.log(content.children);
console.log(content.childNodes);
console.log(content.firstElementChild);
console.log(content.firstChild);

/*
- childNodes
- parentNode
- nextSibling
- previousSibling
- firstChild
- lastChild

-> Trả về Node: text, comment, element,...
*/
