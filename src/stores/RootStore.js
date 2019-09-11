import { CreateContext } from "react";
// import { RoutesStore } from "./RoutesStore";
// import { ShopperStore } from "./ShopperStore";

export class RootStore {
  constructor() {
    routerStore = new RoutesStore(this);
    shoppingListStore = new ShopperStore(this);
  }
}

export const RootStoreContext = CreateContext(new RootStore());
