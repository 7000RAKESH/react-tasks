import React, { Component } from "react";
let seconds;
class Stopwatch extends Component {
  state = {
    sec: 0,
    min: 0,
    hours: 0,
  };
  start = () => {
    seconds = setInterval(() => {
      if (this.state.sec < 60) {
        this.setState({ sec: this.state.sec + 1 });
        if (this.state.sec == 59) {
          this.setState({ min: this.state.min + 1 });
          if (this.state.min == 59) {
            this.setState({ min: 0 });
          }
          if (this.state.min == 59) {
            this.setState({ hours: this.state.hours + 1 });
          }
        }
      } else {
        this.setState({ sec: 0 });
      }
    }, 1000);
  };
  stop = () => {
    clearInterval(seconds);
  };
  clear = () => {
    this.setState({ sec: 0, min: 0, hours: 0 });
    clearInterval(this.seconds);
  };
  render() {
    return (
      <div>
        <h1>Time :</h1>
        <h1>
          Sec: {this.state.sec} Min : {this.state.min} hours :{this.state.hours}
        </h1>
        <button onClick={this.start} disabled={this.state.sec}>
          Start
        </button>
        <button onClick={this.stop}>Stop</button>
        <button onClick={this.clear}>clear</button>
      </div>
    );
  }
}

export default Stopwatch;
