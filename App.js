import { useWindowDimensions, SafeAreaView, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { useFonts } from "expo-font";
import { fontCollection } from "./src/utils/Global/fonts";
import Navigator from "./src/Navigation/Navigator";
import { Provider } from "react-redux";
import { store } from "./src/app/store";
import {init} from "./src/utils/db"

init()
const App = () => {
  const [fontsLoaded] = useFonts(fontCollection);

  if (!fontsLoaded) return null;

  return (
    <>
      <StatusBar backgroundColor="#4F6D7A" />
      <Provider  store={store}>
      <Navigator />
      </Provider>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
