import {
  TouchableOpacity,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import color from "../utils/Global/color";
// import products from "../Data/products.json";
import { FontAwesome } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import Header from "../Components/Header";
import Counter from "../Components/Counter";
import { useDispatch } from "react-redux";
import { addCartItem } from "../features/cart/cartSlice";
import { useGetProductQuery } from "../app/services/shop";
import LoadingSpinner from "../Components/LoadingSpinner";

const ItemDetail = ({ route }) => {
  const dispatch = useDispatch();
  const { productId } = route.params;
  const { data: product, isLoading } = useGetProductQuery(productId);

  if (isLoading)
    return (
      <LoadingSpinner/>
    );

  return (
    <View>
      <View style={styles.content}>
        <Image
          style={styles.image}
          source={{ uri: product?.images ? product.images[0] : null }}
          resizeMode="cover"
        />
        <View style={styles.containerText}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
        <View style={styles.containerPrice}>
          <Text style={styles.price}>$ {product.price}</Text>

          <Counter
            initialValue={1}
            product={product}
            textButton="Agregar al Carrito"
          />
        </View>
      </View>
    </View>
  );
};

export default ItemDetail;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "start",
    alignItems: "center",
  },
  content: {
    width: "100%",
    color: color.cardBg,
  },

  image: {
    width: "100%",
    height: 300,
  },
  containerText: {
    gap: 25,
    paddingHorizontal: 5,
    paddingVertical: 25,
  },

  containerPrice: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  description: {
    fontSize: 20,
    lineHeight: 24,
    color: color.descri,
    textAlign: "justify",
  },
  price: {
    fontSize: 30,
    color: color.precio,
    fontWeight: "bold",
    letterSpacing: -0.8,
  },
  buyNow: {
    backgroundColor: color.bgFondo,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  buyNowText: {
    color: color.txt,
    fontSize: 18,
    fontWeight: "bold",
  },
  count: {
    width: "90%",
    alignContent: "center",
    alignSelf: "center",
    marginTop: 10,
  },
});
