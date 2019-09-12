import * as React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { Col, Grid, Row } from "@ticmakers-react-native/flexbox";
import LottieView from 'lottie-react-native';

const animations = {
  checkedDone: require("./loading.json")
};

const viewport = Dimensions.get("window");

/**
 * Defines the header elements
 */
const Header = () => {
    let animationCheckedDone;
  return (
    //     <View id="app" class="flex-container">
    //     <View class="flex-item" style="background-color:red"></View>
    //     <View class="flex-item" style="background-color:blue"></View>
    //     <View class="flex-item" style="background-color:yellow"></View>
    //     <View class="flex-item" style="background-color:grey"></View>
    //   </View>

    <View>
     <Text style={ { fontFamily: 'Righteous' }}>Custom Font</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    bigBlue: {
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 30,
      fontFamily: 'Righteous'
    },
    red: {
      color: 'red',
    },
  });

export default Header;
