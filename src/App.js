import React from "react";
import { View, StyleSheet, Platform } from "react-native";
import Router from "./config/Router";
import Header from "./viewElements/Header"

/**
 * Defines the top most component in hierarchy
 * Returns the react router for navigation
 */

class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Header />
          {/* <Router /> */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    backgroundColor: "blue"
  },
  wrapper: {
    flex: 1,
    backgroundColor: "#F5FCFF",
    width: "100%",
    maxWidth: 425,
    // backgroundColor: "green"
  }
});

// Defines the hot reloading
let hotWrapper = () => () => App;
if (Platform.OS === "web") {
  const { hot } = require("react-hot-loader");
  hotWrapper = hot;
}
export default hotWrapper(module)(App);
