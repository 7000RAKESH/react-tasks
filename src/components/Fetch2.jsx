import React, { Component } from "react";

export default class Fetch2 extends Component {
  state = {
    data: [],
    count: 1,
  };
  componentDidMount = () => {
    let id = this.state.count;
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => this.setState({ data }));
  };
  componentDidUpdate = (props, prevState) => {
    if (prevState.count !== this.state.count)
      fetch(`https://fakestoreapi.com/products/${prevState.count}`)
        .then((res) => res.json())
        .then((data) => this.setState({ data }));
  };
  prev = () => {
    this.setState({
      count: this.state.count > 1 ? this.state.count - 1 : 1,
    });
  };
  next = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    // console.log(this.state.data);
    return (
      <div style={{ width: 500, height: 400, border: 10 }}>
        <div>
          <h1>count: {this.state.count}</h1>
          <h3>{this.state.data.title}</h3>
          <img
            style={{ widows: 100, height: 100 }}
            src={this.state.data.image}
            alt=""
          />
          <p>{this.state.data.description}</p>
          <p>Price: {this.state.data.price}</p>
          <p>category: {this.state.data.category}</p>
        </div>
        <button onClick={this.prev}>Previous</button>{" "}
        <button onClick={this.next}>Next</button>
      </div>
    );
  }
}
