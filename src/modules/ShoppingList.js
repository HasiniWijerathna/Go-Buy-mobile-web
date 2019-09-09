import * as React from "react";
import { SwipeableFlatList } from "react-native";
import { observer } from "mobx-react-lite";
import { ShoppingCard } from "../viewElements/ShoppingCard";

export const ShoppingList = observer(() => {
  const data = ["one", "two", "data"]
  return (
    <SwipeableFlatList
    data={data}
    bounceFirstRowOnMount={true}
    maxSwipeDistance={160}
    renderItem={ShoppingCard}
  />
  );
});
