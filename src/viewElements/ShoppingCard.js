import * as React from "react";
import {
    Text,
    View,
    Button,
    StyleSheet
} from 'react-native';

export const ShoppingCard = () => {
    return (
        <View style={styles.card}>
            <Text>
            ShoppingItem 
            </Text>    
        </View>
    );
}


const styles = StyleSheet.create({
    card: {
        borderRadius: 3,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 1
    },
   
});
