import React, { Component } from "react";

class Calculator extends Component {
  state = {
    count: "",
  };

  value = (e) => {
    this.setState({ count: this.state.count + e.target.value });
  };
  equal = () => {
    this.setState({ count: eval(this.state.count) });
  };

  allClear = () => {
    this.setState({ count: "" });
  };
  delete = () => {
    this.setState({
      count: this.state.count.slice(0, -1),
    });
  };
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <input
          type="text"
          style={{ width: 200, height: 30 }}
          value={this.state.count}
          onChange={this.value}
        />
        <div>
          <button onClick={this.value} value={1}>
            1
          </button>
          <button onClick={this.value} value={2}>
            2
          </button>
          <button onClick={this.value} value={3}>
            3
          </button>
          <button onClick={this.value} value={4}>
            4
          </button>
          <button onClick={this.value} value={5}>
            5
          </button>
          <button onClick={this.value} value={6}>
            6
          </button>
          <button onClick={this.value} value={7}>
            7
          </button>
          <button onClick={this.value} value={8}>
            8
          </button>
          <button onClick={this.value} value={9}>
            9
          </button>
          <button onClick={this.value} value={0}>
            0
          </button>
          <button onClick={this.equal} value={"="}>
            =
          </button>
        </div>
        <div>
          <button onClick={this.value} value={"+"}>
            +
          </button>
          <button onClick={this.value} value={"-"}>
            -
          </button>
          <button onClick={this.value} value={"."}>
            .
          </button>
          <button onClick={this.value} value={"*"}>
            x
          </button>
          <button onClick={this.value} value={"%"}>
            %
          </button>
          <button onClick={this.value} value={"/"}>
            /
          </button>
        </div>
        <div>
          <button onClick={this.allClear}>AC</button>
          <button onClick={this.delete} value={1}>
            Del
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
