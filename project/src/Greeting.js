import React, { Component } from "react";

export default class Greeting extends Component {
  render() {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;

    if (hours < 12) {
      timeOfDay = "morning";
    } else if (hours > 12 && hours < 17) {
      timeOfDay = "afternonn";
    } else {
      timeOfDay = "evening";
    }
    return (
      <div>
        <h1>Good {timeOfDay} to you, sir or lady</h1>
      </div>
    );
  }
}
