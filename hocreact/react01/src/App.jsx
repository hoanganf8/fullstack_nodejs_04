import React, { Component } from "react";
import Counter from "./components/Counter";

export class App extends Component {
  constructor() {
    super();
    this.state = { show: true };
  }
  render() {
    //
    return (
      <div>
        <button
          onClick={() => {
            this.setState({ show: !this.state.show });
          }}
        >
          Toggle
        </button>
        {this.state.show && <Counter initCount={0} />}
      </div>
    );
  }
}

export default App;
