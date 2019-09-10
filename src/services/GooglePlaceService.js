import React, { useContext } from "react";
import GOOGLE_API_KEY from "../config/AppConst";
import Geolocation from "@react-native-community/geolocation";

/**
 * Fetch the available places for the identified category
 * @param {string} placeType
 */
const fetchNearPlaces = placeType => { };

/**
 * Fetches the users current location
 *
 * When fetchCurrentLocation gets triggered,
 * it uses the getCurrentPosition funciton to pass the coordinates to the shopper store
 */
const fetchCurrentLocation = shopperStore => {

  Geolocation.getCurrentPosition(
    //Fetches the current location when the access is granted
    (position) => {
      const coordinates = { latitude: position.coords.latitude, longitude: position.coords.longitude };
      shopperStore.addGeoLocationStore(coordinates);
    },
    (error) => alert(error.message),
    {
      enableHighAccuracy: true, timeout: 20000, maximumAge: 1000
    }

  );

};

export { fetchNearPlaces, fetchCurrentLocation };
