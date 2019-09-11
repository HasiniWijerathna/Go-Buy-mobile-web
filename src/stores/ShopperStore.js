import { observable } from "mobx";
import * as React from "react";

/**
 * Defined the mobx store with shopper attributes
 * At this stage this store consist of both user and shopping items data
 */
class ShopperStore {
  @observable geoLocation = { latitude: "", longitude: "" };
  @observable shoppingList = [];
  @observable isLoading = true;

  /**
   * Addes shopping items to the shopping store
   * @param {string} shoppingItem
   */
  addItemstoShoppingStore = shoppingItem => {
    this.isLoading = true;
    this.shoppingList.push(shoppingItem);
    this.isLoading = false;
    return shoppingItem;
  };

  /**
   * Adds user geo location to the store
   * @param {object} coordinates
   */
  addGeoLocationStore = coordinates => {
    this.isLoading = true;
    this.geoLocation = coordinates;
    this.isLoading = false; 
  };
}

export const ShopperStoreContext = React.createContext(new ShopperStore());
