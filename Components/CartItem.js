import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import colors from "../src/color";
import fonts from "../src/fonts";
import { useDispatch } from "react-redux";
import { deleteCartItem } from "../src/features/cart/cartSlice";
import Counter from "./Counter";

const CartItem = ({ item }) => {
  const dispatch = useDispatch()
  return (
    <View style={styles.card}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{item.title}</Text>
        <Text style={styles.text2}>{item.brand}</Text>
        <Text style={styles.text2}>Cantidad: {item.quantity} </Text>
        <Text style={styles.text2}>Precio: ${item.price}</Text>
       
          <Counter/>
      
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
    backgroundColor: colors.descri,
    padding: 20,
    margin: 10,
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    height: 100,
    alignItems: "center",
  },
  textContainer: {
    width: "70%",
  },
  text: {
    color: colors.bgFondo,
    fontSize: 19,
    fontFamily: fonts.ProRegu,
  },
  text2: {
    color: colors.cardBg,
    fontSize: 14,
    fontFamily: fonts.sansBlack,
  },
  btncount:{
    position:"absolute",
    right:5,
    top:-6,
    width:"100%",
  },
});
