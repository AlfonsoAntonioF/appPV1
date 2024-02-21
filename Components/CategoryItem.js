import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Card from "./Card";
import color from "../src/color";
import fonts from "../src/fonts";

const CategoryItem = ({ category, navigation }) => {
  return (
    <Pressable onPress={() => navigation.navigate('ItemListCategory',{categorySelected:category})}>
      <Card style={styles.cardContainer}>
        <Text style={styles.text}>{category}</Text>
      </Card>
    </Pressable>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  cardContainer: {
    width:"85%",
    backgroundColor:color.bgFondo,
    marginHorizontal:"10%",
    marginVertical:10,
    padding:20,
    alignItems:"center",
    borderRadius:20,
  },
  text: {
    fontSize: 24,
    color: color.txt,
    fontFamily:fonts.sansBlack,
  },
});
