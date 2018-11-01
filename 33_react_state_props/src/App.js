import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BeyContainer from "./Components/BeyContainer";

class App extends Component {
  componentDidMount() {
    console.log("App componentDidMount()");
  }
  render() {
    console.log("App Render");
    return <BeyContainer />;
  }
}

export default App;
