import * as React from "react";
import { Text, StyleSheet, View, Dimensions } from "react-native";
/**
 * Defines the text box for adding items
 */

const MapView = ({props}) => {
    console.log('props => '+ props.name);

  return (
    <View>
        <Text>MAP VIEW</Text>
      </View>
  );
};

const windowW= Dimensions.get('window').width
const windowH = Dimensions.get('window').height

// Defines the styles of the swipe item
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: windowH
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

export default MapView;