import React, { Component } from "react";
import { Platform } from "react-native";
import Router from "./config/Router";
import PushNotification from "./services/PushNotificationService";
import GeolocationExample from "./services/GeolocationService";
import Geolocation from "@react-native-community/geolocation";

class App extends Component {
  render() {
    Geolocation.getCurrentPosition(info => console.log(info.coords));
    return <GeolocationExample />;
  }
}

let hotWrapper = () => () => App;
if (Platform.OS === "web") {
  const { hot } = require("react-hot-loader");
  hotWrapper = hot;
}
export default hotWrapper(module)(App);
