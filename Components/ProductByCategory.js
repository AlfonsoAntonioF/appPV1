import {TouchableOpacity, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import color from '../src/color'
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";


const ProductByCategory = ({item, selectedProductId}) => {
    const [isFavorite, setIsFavorite] = useState(false); // Estado para rastrear si el artículo es favorito

    const toggleFavorite = () => {
      setIsFavorite(!isFavorite); // Cambia el estado de favorito al contrario del estado actual
    };
  return (
    <TouchableOpacity
      onPress={() => selectedProductId(item.id)}
      style={styles.container}
    >
      <View style={styles.content}>
        <Text style={styles.textId}>{item.id}</Text>
        <Text style={styles.text}>{item.title}</Text>

        <Image
          style={styles.image}
          source={{ uri: item.thumbnail }}
          resizeMode="cover"
        />

        <FontAwesome
          name={isFavorite ? "heart" : "heart-o"}
          size={24}
          color={isFavorite ? "red" : color.txt}
          onPress={toggleFavorite}
          style={styles.favoriteIcon}
        />
      </View>
    </TouchableOpacity>
  )
}

export default ProductByCategory


const styles = StyleSheet.create({
    container: {
      marginVertical: 10,
    },
    content: {
      backgroundColor: color.bgFondo,
      width: "80%",
      marginHorizontal: "10%",
      padding: 10,
      borderRadius: 10,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between", // Alinea los elementos horizontalmente
    },
    text: {
      width: "30%",
      fontSize: 16,
      color: color.txt,
    },
    textId: {
      width: "10%",
      fontSize: 16,
      color: color.txt,
    },
    image: {
      minWidth: 90,
      minHeight: 90,
      borderRadius: 3,
    },
    favoriteIcon: {
      position: "absolute",
      top: 5,
      right: 5,
    },
  });
  