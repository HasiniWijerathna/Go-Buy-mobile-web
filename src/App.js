import React, { Component } from "react";
import { Platform, Animated } from "react-native";
import Router from "./config/Router";
import PushNotification from "./services/PushNotification";
import LSTMclassifier from "../src/recurrentNeuralNetwork/classifier/LSTMclassifier";

class App extends Component {

  render() {
    return <LSTMclassifier />;
  }
}

let hotWrapper = () => () => App;
if (Platform.OS === "web") {
  const { hot } = require("react-hot-loader");
  hotWrapper = hot;
}
export default hotWrapper(module)(App);
