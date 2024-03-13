import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import CategoryItem from "./CategoryItem";
// import categories from "../Data/categories.json";
import { useGetCategoriesQuery } from "../src/app/services/shop";

const Categories = ({ navigation }) => {

  const {data:categories} = useGetCategoriesQuery()
  
  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <CategoryItem
          category={item}
          navigation={navigation}
        />
      )}
    />
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
});
