import * as React from "react";
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

/**
 * The hook defines the shopping list item
 */
export const ShoppingCard = () => {
    return (
        <View style={styles.card}>
            <Text>
                ShoppingItem
            </Text>
        </View>
    );
}

// Styles for shopping card
const styles = StyleSheet.create({
    card: {
        borderRadius: 3,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 1
    },

});
