import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import colors from "../utils/Global/color";
import fonts from "../utils/Global/fonts";
import { useDispatch } from "react-redux";
import { deleteCartItem } from "../features/cart/cartSlice";
import Counter from "./Counter";
import { Image } from "react-native";

const CartItem = ({ item }) => {
  const dispatch = useDispatch()
  return (
    <View style={styles.card}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{item.title}</Text>
        {/* <Text style={styles.text2}>{item.brand}</Text> */}
        <Image style={styles.img} source={{ uri: item.images[0]}} resizeMode="center" />
        <Text style={styles.text2}>Cantidad: {item.quantity} </Text>
        <Text style={styles.text2}>Precio: ${item.price}</Text>
      
      </View>
      <Pressable onPress={ () => dispatch(deleteCartItem(item.id))  } >
        <Entypo name="trash" size={30} color="black" />
      </Pressable>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#B7F1FF',
    padding: 20,
    margin: 5,
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    height: 'auto',
    alignItems: "center",
  },
  textContainer: {
    width: "70%",
  },
  text: {
    color: '#2874A6',
    fontSize: 19,
    fontFamily: fonts.sansBold,
  },
  text2: {
    color: '#1B4F72',
    fontSize: 14,
    fontFamily: fonts.sansBlack,
  },
  btncount:{
    position:"absolute",
    right:5,
    top:-6,
    width:"100%",
  },
  img:{
    minWidth: 70,
    minHeight: 150,
    borderRadius: 10,
    width: 100, 
    height: 100
  }
});
