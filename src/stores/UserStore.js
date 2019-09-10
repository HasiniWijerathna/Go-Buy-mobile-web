import { observable } from "mobx";
import { CreateContext } from "react";

class UserStore {
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

export const ShoppingStoreContext = CreateContext(new UserStore());
