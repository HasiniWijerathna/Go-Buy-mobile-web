import { observable } from "mobx";
import { CreateContext } from "react";

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
