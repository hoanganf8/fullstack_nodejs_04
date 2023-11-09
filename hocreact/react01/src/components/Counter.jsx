//Class Component
import React, { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.initCount,
    };
    console.log("1. constructor"); //Khởi tạo các giá trị mặc định: props, state
  }
  handleIncrement = () => {
    //Để cập nhật state -> dùng hàm setState có sẵn của React
    this.setState({
      count: this.state.count + 1,
    });
  };
  componentDidMount() {
    console.log("3. componentDidMount");
  }
  componentDidUpdate() {
    console.log("4. componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("5. componentWillUnmount");
  }
  render() {
    console.log("2. Render");
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}

export default Counter;

/*
State 
-> Trạng thái thể hiện dữ liệu của 1 component
-> Khi state thay đổi -> Component sẽ re-render (Làm mới)
- Trong class component -> state có sẵn và thể hiện là 1 thuộc tính (object)
- Không được thay đổi trực tiếp state, mà phải thông qua hàm riêng (Có sẵn)
- Không được setState trong constructor, render
*/
