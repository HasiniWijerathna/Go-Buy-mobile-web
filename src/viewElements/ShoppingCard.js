import * as React from "react";
import {
    Text,
    View,
    Button,
    StyleSheet
} from 'react-native';

export const ShoppingCard = () => {
    return (
        <View style={styles.row}>

          <View style={styles.rowData}>
            <Text style={styles.rowDataText}>Item name</Text>
            <Text style={styles.rowDataSubText}>Item</Text>
          </View>
        </View>
    );
}


const styles = StyleSheet.create({
    row: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      padding: 15,
      marginBottom: 5,
      backgroundColor: "white",
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: "rgba(0,0,0,0.1)"
    },
    rowIcon: {
      width: 64,
      height: 64,
      marginRight: 20,
      borderRadius: "50%",
      boxShadow: "0 1px 2px 0 rgba(0,0,0,0.1)"
    },
    rowData: {
      flex: 1
    },
    rowDataText: {
      fontSize: 15,
      textTransform: "capitalize",
      color: "#4b4b4b"
    },
    rowDataSubText: {
      fontSize: 13,
      opacity: 0.8,
      color: "#a8a689",
      marginTop: 4
    }
  });
