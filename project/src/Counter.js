import React, { Component } from "react";

export default class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.divideByTwo = this.divideByTwo.bind(this);
    this.multiplyByThree = this.multiplyByThree.bind(this);
  }
  handleClick() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  }
  handleReset() {
    this.setState(prevState => {
      return {
        count: (prevState.count = 0)
      };
    });
  }
  divideByTwo() {
    this.setState(prevState => {
      return {
        count: prevState.count / 2
      };
    });
  }
  multiplyByThree() {
    this.setState(prevState => {
      return {
        count: Math.floor(prevState.count * 3)
      };
    });
  }

  render() {
    return (
      <div>
        <h1>The Count is: {this.state.count}</h1>
        <button onClick={this.handleClick}>Click!</button>
        <button onClick={this.handleReset}>Reset!</button>
        <button onClick={this.divideByTwo}>divide by two!</button>
        <button onClick={this.multiplyByThree}>times three</button>
      </div>
    );
  }
}
//   constructor() {
//     super();
//     this.state = {
//       count: 0
//     };
//     this.handleClick = this.handleClick.bind(this);
//     this.handleReset = this.handleReset.bind(this);
//   }
//   handleClick() {
//     this.setState(prevState => {
//       return {
//         count: prevState.count + 1
//       };
//     });
//   }
//   handleReset() {
//     this.setState(prevState => {
//       return {
//         count: (prevState = 0)
//       };
//     });
//   }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <button onClick={this.handleClick}>Click!</button>
//         <button onClick={this.handleReset}>Reset!</button>
//       </div>
//     );
//   }
// }
