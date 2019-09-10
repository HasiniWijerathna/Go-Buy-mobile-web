import GOOGLE_API_KEY from '../config/AppConst';
import Geolocation from '@react-native-community/geolocation';

/**
 * Fetch the available places for the identified category
 * @param {string} placeType 
 */
const fetchNearPlaces = placeType => {

}

/**
 * Fetches the users current location 
 */
const fetchCurrentLocation = () => {
    const coordinates = {
        latitude : '',
        longitude: ''
    }
    Geolocation.getCurrentPosition(info => console.log(info.coords))
}