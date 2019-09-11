import React, { Component } from "react";
import { Text, View, Alert, TouchableOpacity } from "react-native";

import Geolocation from "@react-native-community/geolocation";

export default class GeolocationExample extends Component {
  state = {
    location: null
  };

  findCoordinates = () => {
    console.log("findCoordinates");
    Geolocation.getCurrentPosition(
      position => {
        const location = JSON.stringify(position.coords);

        this.setState({ location });
      },
      error => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };

  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.findCoordinates}>
          <Text>Find My Coords?</Text>
          <Text>Location: {this.state.location}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
