import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Screens/Home";
import ItemListCategory from "../Screens/ItemListCategory";
import ItemDetail from "../Screens/ItemDetail";
import Header from "../Components/Header";
const Stack = createNativeStackNavigator();
const ShopStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={({ route, navigation }) => {
        return {
          header: () => {
            return (
              <Header
                navigation={navigation}
                title={
                  route.name === "Home"
                    ? "Categorias"
                    : route.name === "ItemListCategory"
                    ? route.params.categorySelected
                    : "Detalle"
                }
              />
            );
          },
        };
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ItemListCategory" component={ItemListCategory} />
      <Stack.Screen name="ItemDetail" component={ItemDetail} />
    </Stack.Navigator>
  );
};

export default ShopStack;

const styles = StyleSheet.create({});
