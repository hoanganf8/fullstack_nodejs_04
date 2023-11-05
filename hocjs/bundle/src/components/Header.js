import image01 from "../assets/images/image01.png";

const Header = () => {
  console.log(process.env.APP_NAME);
  console.log(process.env.SERVER_API);
  console.log(process.env.NODE_ENV); //Lấy tên môi trường
  return `
  <header>
    <h1>HEADER</h1>
    <img src="${image01}" width="300"/>
  </header>
  `;
};
export default Header;
