import * as React from "react";
import {
  Text,
  View,
  Button,
  StyleSheet,
  ScrollView,
  ActivityIndicator
} from "react-native";
import { observer } from "mobx-react-lite";
import { RouterStoreContext } from "../stores/RoutesStore";
import { ShoppingCard } from "../viewElements/ShoppingCard";

export const Home = observer(() => {
  const routerStore = React.useContext(RouterStoreContext);
  return (
    <ScrollView noSpacer={true} noScroll={true} style={styles.container}>
      <ActivityIndicator
        style={[styles.centering, styles.gray]}
        color="#ff8179"
        size="large"
      />
    </ScrollView>
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: "whitesmoke"
  },
  centering: {
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    height: "100vh"
  }
});
