import GOOGLE_API_KEY from "../config/AppConst";
import Geolocation from "@react-native-community/geolocation";
import { ShopperStoreContext } from "../stores/ShopperStore";

/**
 * Fetch the available places for the identified category
 * @param {string} placeType
 */
const fetchNearPlaces = placeType => {};

/**
 * Fetches the users current location
 *
 * When fetchCurrentLocation gets triggered, 
 * it uses the getCurrentPosition funciton to pass the coordinates to the shopper store
 */
const fetchCurrentLocation = () => {
  const shopperStore = useContext(ShopperStoreContext);

  Geolocation.getCurrentPosition(info => {
    const coordinates = {
      latitude: info.coords.latitude,
      longitude: info.coords.longitude
    };

    shopperStore.addGeoLocationStore(coordinates);
  });
};
