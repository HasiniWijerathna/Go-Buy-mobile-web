import * as React from "react";
import {  StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
/**
 * Defines the text box for adding items
 */
const GoogleMaps = ({ props }) => {
  console.log("props => " + props.name);
  return (
    <View
      style={{
        width: "100%",
        paddingLeft: "5%",
        height: 800
      }}
    >
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0,
          longitudeDelta: 0.0
        }}
      >
        <MapView.Marker
          coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
          title={"title"}
          description={"description"}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  map: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
});

export default GoogleMaps;
