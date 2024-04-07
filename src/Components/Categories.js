import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import CategoryItem from "./CategoryItem";
// import categories from "../Data/categories.json";
import { useGetCategoriesQuery } from "../app/services/shop";
import LoadingSpinner from "./LoadingSpinner";
import Error from "./Error";
import EmptyListComponent from "./EmptyListComponent";

const Categories = ({ navigation }) => {
  const {
    data: categories,
    isError,
    isLoading,
    isSuccess,
  } = useGetCategoriesQuery();

  const onRetry = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Home" }],
    });
  };
  if (isLoading) return <LoadingSpinner />;
  if (isError)
    return (
      <Error
        message="¡Ups! Algo salió mal."
        textButton="Recargar"
        onRetry={onRetry}
      />
    );
  if (isSuccess && categories === null)
    return <EmptyListComponent message="No hay categorias que mostrar " />;


  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <CategoryItem category={item} navigation={navigation} />
      )}
      horizontal={false}
    />
  );
};

export default Categories;

const styles = StyleSheet.create({});
