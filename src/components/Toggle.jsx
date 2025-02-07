import React, { Component } from "react";

class Toggle extends Component {
  state = {
    text: true,
  };
  toggle = () => {
    this.setState({ text: !this.state.text });
  };

  render() {
    return (
      <div>
        <h1>{this.state.text ? <p>Hello</p> : ""}</h1>
        <button onClick={this.toggle}>
          {this.state.text ? "Hide" : "Show"}
        </button>
      </div>
    );
  }
}

export default Toggle;
