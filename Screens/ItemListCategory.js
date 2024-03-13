import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import Header from "../Components/Header";
import { useState } from "react";
// import products from "../Data/products.json";
import Search from "../Components/Search";
import ItemDetail from "./ItemDetail";
import ProductByCategory from "../Components/ProductByCategory";
import { useGetProductsByCategoryQuery } from "../src/app/services/shop";

const ItemListCategory = ({ navigation, route }) => {
  const { categorySelected } = route.params;
  const {
    data: products,
    isError,
    isLoading,
    isSuccess,
    error,
  } = useGetProductsByCategoryQuery(categorySelected);
  const [productsFiltered, setProductsFiltered] = useState([]);
  // const [productsCategory, setProductsCategory] = useState([]);
  const [keyWord, setKeyWord] = useState("");

  useEffect(() => {
    setProductsFiltered(products);
    if (keyWord)
      setProductsFiltered(
        products.filter((product) => {
          const productTitleLower = product.title.toLowerCase();
          const keywordLower = keyWord.toLowerCase();
          return productTitleLower.includes(keywordLower);
        })
      );
  }, [categorySelected, keyWord]);

  const handlerKeyword = (k) => {
    setKeyWord(k);
  };

  if(isLoading) return <View><Text>cargando...</Text></View>

  return (
    <>
      {/* <Header title={categorySelected} /> */}
      <Search handlerKeyword={handlerKeyword} />

      <FlatList
        data={productsFiltered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductByCategory item={item} navigation={navigation} />
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
