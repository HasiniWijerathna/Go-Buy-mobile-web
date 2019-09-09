import { observable } from "mobx";
import * as React from "react";


 class RouterStore {

    constructor() {
        
    }


    @observable screen = "Home";
}

export const RouterStoreContext = React.createContext(new RouterStore());