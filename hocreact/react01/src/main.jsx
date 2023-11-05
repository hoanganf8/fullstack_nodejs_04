import ReactDOM from "react-dom/client";
import React from "react";

//Render UI
const root = document.querySelector("#root");

//React Element
// const h1 = React.createElement(
//   "h1",
//   { className: "title" },
//   "Học React không khó",
// );
// const h2 = React.createElement(
//   "h2",
//   { className: "sub-title" },
//   "Học React dễ hơn JS",
// );
// const button = React.createElement(
//   "button",
//   {
//     type: "button",
//     className: "btn",
//     onClick: (e) => {
//       e.target.style.color = "red";
//     },
//   },
//   "Click me",
// );

// const ul = React.createElement(
//   "ul",
//   {
//     className: "lists",
//   },
//   ...[...Array(100).keys()].map((index) =>
//     React.createElement("li", {}, `Item ${index + 1}`),
//   ),
// );

// const div = React.createElement(
//   "div",
//   {
//     id: "main",
//     className: "main",
//     "data-name": "hello",
//     style: {
//       fontWeight: "bold",
//       textDecoration: "underline",
//     },
//   },
//   ul,
//   h1,
//   h2,
//   button,
// );

//JSX
const div = (
  <div className="main" id="main">
    <h1>Học React không khó</h1>
    <h2>Học React dễ hơn js</h2>
  </div>
);
console.log(div);

ReactDOM.createRoot(root).render(div);

//JSX => React Element (Thông qua Babel) => HTML (Thông qua ReactDOM)
