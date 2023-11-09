import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";

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
// const title = "Hello F8";
// const getName = () => {
//   return <h2>Hoàng An</h2>;
// };
// const Product = () => {
//   return <h2>Sản phẩm ABC</h2>;
// }; //=> Component
// const Welcome = () => {
//   return <h2>Học React không khó</h2>;
// };
// class Welcome2 extends React.Component {
//   render() {
//     return <h2>Học React dễ hơn JS thuần</h2>;
//   }
// }
// const div = (
//   <div className="content">
//     <h1>{title}</h1>
//     {getName()}
//     <Product />
//     <Welcome></Welcome>
//     <Welcome2 />
//   </div>
// );
// console.log(div);

ReactDOM.createRoot(root).render(<App />);

//JSX => React Element (Thông qua Babel) => HTML (Thông qua ReactDOM)
