import { observable } from "mobx";
import { CreateContext } from "react";

class ShoppingListStore {
    @observable count = 0;
}

export const ShoppingStoreContext = CreateContext(new ShoppingListStore());