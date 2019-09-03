import { observable } from "mobx";
import * as React from "react";

class RouterStore {
    @observable screen = "ShoppingList";
}

export const RouterStoreContext = React.createContext(new RouterStore());