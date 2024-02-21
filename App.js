import { useWindowDimensions, SafeAreaView, StyleSheet} from "react-native";
import {StatusBar} from 'expo-status-bar'
import React from "react";
import Home from "./Screens/Home";
import { useEffect, useState } from "react";
import ItemListCategory from "./Screens/ItemListCategory";
import ItemDetail from "./Screens/ItemDetail";
import { useFonts } from "expo-font";
import { fontCollection } from "./src/fonts";
import Navigator from "./Navigation/Navigator";



const App = () => {
  const [categorySelected, setCategorySelected] = useState("");
  const [productId, setProductId] = useState(0);
  const [portrait,setPortrait] = useState(true)
  const {width,height} = useWindowDimensions()
  const [fontsLoaded] = useFonts(fontCollection)

  if (!fontsLoaded) return null

  useEffect(()=>{
    if(width > height) setPortrait(false) 
    else setPortrait(true)
  },[width,height])


  const selectedCategoryState = (category) => {
    setCategorySelected(category);
  };

  const selectedProductId = (id) => {
    setProductId(id);
  };

  return (
    <>
      <StatusBar backgroundColor="#4F6D7A" />
      <Navigator/>

     
      {/* <SafeAreaView style={styles.container}>
        {categorySelected ? (
          productId ? (
            <ItemDetail productId={productId} portrait={portrait}/>
          ) : (
            <ItemListCategory
              selectedProductId={selectedProductId}
              categorySelected={categorySelected}
            />
          )
        ) : (
          <Home selectedCategoryState={selectedCategoryState} />
        )}
      </SafeAreaView> */}
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
