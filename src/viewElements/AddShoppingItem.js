import * as React from "react";
import { TextInput, StyleSheet, View } from "react-native";
import GoogleMaps from "./GoogleMaps";

/**
 * Defines the text box for adding items
 */

const AddShoppingItem = () => {
  const data = { name: "x" };
  return (
    <View>
      <View style={styles.swipeContentContainerStyle}>
        <TextInput style={styles.button} defaultValue="Shopping item" />
      </View>
      <GoogleMaps props={data} />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: "99%",
    backgroundColor: "#ffffff",
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 6
  },
  swipeContentContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red"
  }
});

export default AddShoppingItem;
