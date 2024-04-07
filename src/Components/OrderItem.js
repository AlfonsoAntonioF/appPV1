import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {Feather} from "@expo/vector-icons"
import fonts from "../utils/Global/fonts";
import colors from "../utils/Global/color";

const OrderItem = ({order}) => {
  return (
    <View style={styles.card}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          {new Date(order.createdAt).toLocaleString()}
        </Text>
        <Text style={styles.text2}>$ {order.total}</Text>
      </View>
      <Feather name="search" size={30} color="black" />
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
    card:{
        backgroundColor:colors.txt,
        borderWidth:2,
        margin:10,
        padding:10,
        borderRadius:10,
        flexDirection:"row",
        justifyContent:"space-between",
        height:100,
        alignItems:"center"
        
    },
    textContainer:{
        width:"80%"
    },
    text:{
        fontSize:17,
        fontFamily:fonts.ProRegu,
    },
    text2:{
        fontSize:19,
        fontFamily:fonts.sansBold,
        color:"grey"
    }
});
