import {
  TouchableOpacity,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import color from "../src/color";
import products from "../Data/products.json";
import { FontAwesome } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import Header from "../Components/Header";

const ItemDetail = ({ productId, portrait }) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const productFinded = products.find((product) => product.id === productId);
    setProduct(productFinded);
  }, [productId]);

  return (
    <View>
      <Header title="Detalle del producto" />
      <View
        style={[
          styles.content,
          !portrait && { flexDirection: "row", gap: 10, padding: 20 },
        ]}
      >
        <Image
          style={[styles.image, !portrait && { width: "40%", height: 200 }]}
          source={{ uri: product?.images ? product.images[0] : null }}
          resizeMode="cover"
        />
        <View style={[styles.containerText, !portrait && { width: "30%" }]}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
        <View
          style={[
            styles.containerPrice,
            !portrait && { width: "20%", flexDirection: "column" },
          ]}
        >
          <Text style={styles.price}>$ {product.price}</Text>
          <Pressable style={styles.buyNow}>
            <Text style={styles.buyNowText}>Buy Now</Text>
          </Pressable>
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
    color:color.cardBg,
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
});
