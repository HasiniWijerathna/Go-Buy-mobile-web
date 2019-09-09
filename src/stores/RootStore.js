
// import * as React from "react";
// import { RoutesStore } from "./RoutesStore";
// import { ShoppingListStore } from "./ShoppingListStore";

//  class RootStore  {

   
//     routerStore =   RoutesStore 
//     shoppingListStore =  ShoppingListStore 

// }

// export const RootStoreContext = CreateContext(new RootStore());

import { observable } from "mobx";
import * as React from "react";
// import { RoutesStore } from "./RoutesStore";
// import { ShoppingListStore } from "./ShoppingListStore";


 class RootStore {


    shoppingListStore = new ShoppingListStore();
     routesStore = new RoutesStore();
}


export const RouterStoreContext = React.createContext(new RootStore( ));