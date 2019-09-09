import React, { Component } from "react";
import { Platform, Animated } from "react-native";
import Router from "./config/Router";
import PushNotification from "./services/PushNotification";
import { trainNeuralNetClassifier } from "./recurrentNeuralNetwork/classifier/BayesClassifier";
// import { trainNeuralNetClassifier } from './recurrentNeuralNetwork/trainer/ClassifierTrainer';


class App extends React.Component {
  constructor() {
    super()
   console.log(trainNeuralNetClassifier('Deposit money'))
  }

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
