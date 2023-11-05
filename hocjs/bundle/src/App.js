//Import từ node_modules
import moment from "moment/moment";

//Import CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/style.css";
import "./assets/styles/header.scss";

//Import từ project
import Header from "./components/Header";
import Footer from "./components/Footer";

//Import JSON -> Tự động convert thành object
import config from "./config.json";
const { SERVER_API, PAGE_LIMIT, EMAIL_ADMIN } = config;
const App = () => {
  return `
  <div class="main">
    ${Header()}
    <h1>Hello F8</h1>
    <h2>${moment().format("DD/MM/YYYY HH:mm:ss")}</h2>
    <h3>SERVER_API: ${SERVER_API}</h3>
    <h3>PAGE_LIMIT: ${PAGE_LIMIT}</h3>
    <h3>EMAIL_ADMIN: ${EMAIL_ADMIN}</h3>
    <button type="button" class="btn btn-primary">Click me</button>
    ${Footer()}
  </div>
  `;
};
export default App;
