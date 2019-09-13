import * as React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { SwipeItem, SwipeButtonsContainer } from "react-native-swipe-item";

// Defines the left button of the swipeable item
const leftButton = (
  <SwipeButtonsContainer
    style={{
      alignSelf: "center",
      aspectRatio: 1,
      flexDirection: "row",
      padding: 10
    }}
  >
    <TouchableOpacity onPress={() => console.log("left button clicked")}>
      <Text>Click me!</Text>
    </TouchableOpacity>
  </SwipeButtonsContainer>
);

/**
 * Defines the shopping list item
 */
const ShoppingCard = () => {
  return (
    <SwipeItem
      style={styles.button}
      swipeContainerStyle={styles.swipeContentContainerStyle}
      rightButtons={leftButton}
      leftButtons={leftButton}
    >
      <Text>Swipe me!</Text>
    </SwipeItem>
  );
};

// Defines the styles of the swipe item
const styles = StyleSheet.create({
  button: {
    width: "99%",
    height: 50,
    alignSelf: "center",
    marginVertical: 5
  },
  swipeContentContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 5,
    borderColor: "#e3e3e3",
    borderWidth: 1
  }
});

export default ShoppingCard;
