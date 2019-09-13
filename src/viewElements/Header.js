import * as React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { Col, Grid, Row } from "@ticmakers-react-native/flexbox";
import "../stylesheets/Header.css";

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
    <div class="main">
	<div>
		<div class = "container"> 
			<h1 class="knockout">Some Beach Somewhere</h1>
		</div>
	</div>
</div>
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
