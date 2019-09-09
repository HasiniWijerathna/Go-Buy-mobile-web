import React, { Component } from "react";
import { Platform, Animated,Text } from "react-native";
import { trainNeuralNetClassifier } from "../trainer/ClassifierTrainer";

class BayesClassifier extends React.Component {
  constructor() {
    super();
    trainNeuralNetClassifier();
  }
  render() {
  
    return (
        <Text>sdfsd</Text>
    );
  }
}


export default BayesClassifier;
