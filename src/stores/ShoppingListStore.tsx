
import { observable } from "mobx";
import * as React from "react";


 class ShoppingListStore {
     constructor()
    {

    }

    @observable count = 0;
}

export const RouterStoreContext = React.createContext(new ShoppingListStore());