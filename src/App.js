import React from "react";
import {
  View,
  StyleSheet,
  Platform,
  Dimensions,
  Button,
  TouchableHighlight,
  Text
} from "react-native";
import Router from "./config/Router";
import Header from "./viewElements/Header";
import AddShoppingItem from "../src/viewElements/AddShoppingItem";
import MediaQuery from 'react-responsive'

/**
 * Defines the top most component in hierarchy
 * Returns the react router for navigation
 */

class App extends React.Component {
  render() {
    const windowW = Dimensions.get("window").width;
    const windowH = Dimensions.get("window").height;

    console.log("windowH -> " + windowH);

    return (
      <View>
        <View style={styles.container}>
        <View style={styles.wrapper}>
          <Header />

          <Router />
       
        </View>
      </View>
           <AddShoppingItem />
      </View>
      
    );
  }
}

const windowW = Dimensions.get("window").width;
const windowH = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    backgroundColor: "#fcccc0"
  },
  wrapper: {
    flex: 1,
    backgroundColor: "#fcccc0",
    width: "100%",
    maxWidth: 425,
    // backgroundColor: "green"
  },
});

// Defines the hot reloading
let hotWrapper = () => () => App;
if (Platform.OS === "web") {
  const { hot } = require("react-hot-loader");
  hotWrapper = hot;
}
export default hotWrapper(module)(App);
