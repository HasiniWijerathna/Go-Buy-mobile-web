import React, { Component, useContext } from "react";
import { Platform } from "react-native";
import Router from "./config/Router";

class App extends Component {
  render() {
    return <Router />;
  }
}

let hotWrapper = () => () => App;
if (Platform.OS === "web") {
  const { hot } = require("react-hot-loader");
  hotWrapper = hot;
}
export default hotWrapper(module)(App);
