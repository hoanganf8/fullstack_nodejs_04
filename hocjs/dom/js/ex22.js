//Shadow HOST
var content = document.querySelector(".content");

//Shadow Root
var shadow = content.attachShadow({
  mode: "open",
});

shadow.innerHTML = `<h1>Học lập trình không khó</h1>`;
var style = document.createElement("style");
style.textContent = `
h1 {
    color: red;
}
`;
shadow.prepend(style);
