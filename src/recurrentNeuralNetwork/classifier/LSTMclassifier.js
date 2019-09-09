import React, { Component } from "react";
import { Platform, Animated,Text } from "react-native";


var natural = require('natural');
var classifier = new natural.BayesClassifier();

classifier.addDocument('bake', 'backery');
classifier.addDocument('buns', 'backery');
classifier.addDocument('bread', 'backery');
classifier.addDocument('plaster', 'pharmacy');
classifier.addDocument('detol', 'pharmacy');
classifier.addDocument(['sell', 'gold'], 'sell');
classifier.addDocument(['buy', 'silver'], 'buy');

classifier.train();

class LSTM extends Component {
  render() {
    console.log(classifier.classify('i am going to silver'));
    return (
        <Text>sdfsd</Text>
    );
  }
}


export default LSTM
