import React from "react";
import { Platform } from "react-native";
import Router from "./config/Router";

/**
 * Defines the top most component in hierarchy
 * Returns the react router for navigation
 */
 
class App extends React.Component {

  render() {
    return <Router />;
  }
}

// Defines the hot reloading
let hotWrapper = () => () => App;
if (Platform.OS === "web") {
  const { hot } = require("react-hot-loader");
  hotWrapper = hot;
}
export default hotWrapper(module)(App);
