import * as React from "react";
import { StyleSheet } from "react-native";
import { observer } from "mobx-react-lite";
// import { RouterStoreContext } from "../stores/RoutesStore";
import ShoppingCard from "../viewElements/ShoppingCard";

/**
 * Defines the shopping list
 */
export const ShoppingList = observer(() => {
  // const routerStore = React.useContext(RouterStoreContext);
  return (
    // <View style={styles.container}>
    //   <Text>Shopping list</Text>
    //   <Button
    //     style={styles.logo}
    //     title="Go to"
    //     onPress={() => (routerStore.screen = "Venues")}
    //   />

    // </View>
    <ShoppingCard />
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
  }
});
