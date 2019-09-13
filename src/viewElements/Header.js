import * as React from "react";
import { View, StyleSheet } from "react-native";
import "../stylesheets/Header.css";
/**
 * Defines the header elements
 */
const Header = () => {
    let current = new Date();
    let today = current.toLocaleDateString('en-US',{weekday: 'long'});
    console.log(today);
    const title =   `Buy list for, ${today}!`
    
  return (
    <View style={styles.container}>
      <h1 className="knockout">{title}</h1>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ff6f69"
  }
});

export default Header;
