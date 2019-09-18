import React, { Component, useContext } from "react";
import { fetchCurrentLocation } from '../services/GooglePlaceService';
import { ShopperStoreContext } from "./ShopperStore";

class StoreHandler extends Component {


    /**
     * Called after the component is mounted
     */
    componentDidMount() {
      //const shopperStore = useContext(ShopperStoreContext);
      //fetchCurrentLocation();
    }
  
    render() {
      return <Router />;
    }
  }
  
export default StoreHandler;
