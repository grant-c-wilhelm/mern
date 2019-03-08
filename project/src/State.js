import React, { Component } from "react";

export default class State extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    };
  }
  render() {
    const loginStatus = this.state.isLoggedIn
      ? "Welcome Back!"
      : "Please login or sign up to continue";
    return <h2>{loginStatus}</h2>;
  }
}
