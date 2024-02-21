import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import Header from "../Components/Header";
import { useState } from "react";
import products from "../Data/products.json";
import Search from "../Components/Search";
import ItemDetail from "./ItemDetail";
import ProductByCategory from "../Components/ProductByCategory";

const ItemListCategory = ({ navigation, route}) => {
  const {categorySelected} = route.params
  const [productsCategory, setProductsCategory] = useState([]);
  const [keyWord, setKeyWord] = useState("");

  useEffect(() => {
    if (categorySelected)
      setProductsCategory(
        products.filter((product) => product.category === categorySelected)
      );
    if (keyWord)
      setProductsCategory(
        productsCategory.filter((product) => {
          const productTitleLower = product.title.toLowerCase();
          const keywordLower = keyWord.toLowerCase();
          return productTitleLower.includes(keywordLower);
        })
      );
  }, [categorySelected, keyWord]);

  const handlerKeyword = (k) => {
    setKeyWord(k);
  };

  return (
    <>
      {/* <Header title={categorySelected} /> */}
      <Search handlerKeyword={handlerKeyword} />

      <FlatList
        data={productsCategory}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductByCategory item={item} navigation={navigation}/>
          // <ItemDetail item={item} selectedProductId={selectedProductId} />
        )}
      />

    </>
  );
};

export default ItemListCategory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
});
