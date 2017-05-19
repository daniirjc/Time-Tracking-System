import React, { Component } from 'react';
import { Route, Provider } from 'react-router';
import MyNavbar from "./NavbarComponent";
import Login from "./Login";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Login />
    );
  }
}
export default App;
