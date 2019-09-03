import * as React from "react";
import {
    Text,
    View,
    Button
} from 'react-native';
import { RouterStoreContext } from "../stores/RoutesStore";


export const Venues = () => {
    const routerStore = React.useContext(RouterStoreContext);
    return (
        <View>
            <Text>
                Venues Page
            </Text>
            <Button title="Go back" onPress={() => routerStore.screen = 'ShoppingList'} />
        </View>
    );
}