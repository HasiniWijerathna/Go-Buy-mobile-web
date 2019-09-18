import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
 import GoogleMaps from "./GoogleMaps";
/**
 * Defines the text box for adding items
 */

const AddShoppingItem = () => {
  const data = {name: 'x'}
  return (
    <View>
      <Text>AddShoppingItem</Text>
      <GoogleMaps
         props={data}
      />
      </View>
  );
};


// Defines the styles of the swipe item
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  bottomView: {
    width: "100%",
    height: 50,
    backgroundColor: "#FF9800",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0
  },

  textStyle: {
    color: "#fff",
    fontSize: 22
  }
});

export default AddShoppingItem;