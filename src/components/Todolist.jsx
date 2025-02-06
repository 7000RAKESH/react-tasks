import React, { Component } from "react";

class Todolist extends Component {
  state = {
    list: "",
    output: [],
  };
  value = (e) => {
    this.setState({ list: e.target.value });
  };
  add = () => {
    this.setState({
      output: [...this.state.output, this.state.list],
      list: " ",
    });
  };
  delete = (index) => {
    this.setState((prevstate) => ({
      output: prevstate.output.filter((_, i) => i !== index),
    }));
  };
  render() {
    // console.log(this.state.output);
    return (
      <div>
        <h1>Todolist</h1>
        <input
          type="text"
          style={{ width: 200, height: 30 }}
          onChange={this.value}
        />
        <button onClick={this.add}>Add</button>
        <div>
          {this.state.output.map((val, index) => {
            return (
              <>
                {val ? (
                  <div key={index}>
                    {val}
                    <button onClick={() => this.delete(index)}>Delete</button>
                  </div>
                ) : (
                  ""
                )}
              </>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Todolist;
