import * as React from "react";
import { StyleSheet, View } from "react-native";
import { observer } from "mobx-react-lite";
import ShoppingCard from "../viewElements/ShoppingCard";

/**
 * Defines the shopping list
 */
export const ShoppingList = observer(() => {
  return (
    <View>
      <ShoppingCard />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    width: 300,
    height: 300
  },
  title: {
    fontWeight: "bold",
    fontSize: 16
  },
  button: {
    borderRadius: 3,
    padding: 20,
    marginVertical: 10,
    marginTop: 100,
    backgroundColor: "#e01b7a"
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: "white"
  }
});
