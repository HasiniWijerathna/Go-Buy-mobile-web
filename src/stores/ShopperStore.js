import { observable } from "mobx";
import { CreateContext } from "react";

/**
 * Defined the mobx store with shopper attributes
 * At this stage this store consist of both user and shopping items data
 */
class ShopperStore {
  @observable geoLocation = { latitude: "", longitude: "" };
  @observable shoppingList = [];
  @observable isLoading = true;

  addItemstoShoppingStore = shoppingItem => {
    this.isLoading = true;
    this.shoppingList.push(shoppingItem);
    this.isLoading = false;
    return shoppingItem;
  };

  addGeoLocationStore = coordinates => {
    this.isLoading = true;
    this.geoLocation = coordinates;
    this.isLoading = false;
  };
}

export const ShopperStoreContext = CreateContext(new ShopperStore());