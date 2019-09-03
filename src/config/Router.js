
import { observer } from "mobx-react-lite";
import { RouterStoreContext } from "../stores/RoutesStore";
import React, { useContext } from "react";
import { ShoppingList } from "../modules/ShoppingList";
import { Venues } from "../modules/Venues";

/**
 * Conditionally render content based on the navigated page
 */
const Router = observer(() => {
    const routerStore = useContext(RouterStoreContext);

    return routerStore.screen === "ShoppingList" ? (
        <ShoppingList />
    ) : (
            <Venues />
        )
});

export default Router;