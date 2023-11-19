// const color = (ParentComponent) => {
//   const MyComponent = (props) => {
//     //logic random color
//     //Tạo div bọc ParentComponent
//     //Dùng CSS Inline
//     return <ParentComponent {...props} />;
//   };
//   return MyComponent;
// };
import React from "react";
const Content = React.memo(function Content() {
  console.log("Content Render");
  return (
    <div>
      <h1>Học React rất dễ</h1>
    </div>
  );
});

export default Content;
/*
Higher Order Component = HOC
- Component cấp cao hơn của Component hiện tại
- Bọc component hiện tại
- Các dữ liệu sẽ đi qua component cấp cao trước khi tới component hiện tại (Thường sẽ truyền dữ liệu qua props)
- Cách thiết kế: Tạo ra 1 component mới nhận vào component ban đầu và trả về chính component đó
*/
