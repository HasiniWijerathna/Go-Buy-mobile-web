
import { CreateContext } from "react";
import { RoutesStore } from "./RoutesStore";
import { ShoppingListStore } from "./ShoppingListStore";

export class RootStore  {

    routerStore = RoutesStore
    shoppingListStore = ShoppingListStore

}

export const RootStoreContext = CreateContext(new RootStore());