import { observer } from "mobx-react-lite";
import { RouterStoreContext } from "../stores/RoutesStore";
import React, { useContext } from "react";
import { ShoppingList } from "../modules/ShoppingList";
import { Venues } from "../modules/Venues";
import { ShopperStoreContext } from "../stores/ShopperStore";
import { fetchCurrentLocation } from "../services/GooglePlaceService";

/**
 * Conditionally render content based on the navigated page
 */
const Router = observer(() => {
  const routerStore = useContext(RouterStoreContext);
  const shopperStore = useContext(ShopperStoreContext);
  console.log(shopperStore);
  fetchCurrentLocation(shopperStore);

  return routerStore.screen === "ShoppingList" ? <ShoppingList /> : <Venues />;
});

export default Router;
