import { StyleSheet } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import colors from "../src/color";
import { useSelector } from "react-redux";
import TabNavigator from "./TabNavigator";
import AuthStack from "./AuthStack";

const Navigator = () => {
  const user = useSelector( (state) => state.auth)
  return (
    <NavigationContainer>
      {user.idToken ?  <TabNavigator/> : <AuthStack/> }

    </NavigationContainer>
  );
};

export default Navigator;

// const styles = StyleSheet.create({
//   tabBar: {
//     backgroundColor: colors.bgFondo,
//     height: 80,
//     position: "absolute",
//     left: 20,
//     right: 20,
//     bottom: 25,
//     borderRadius: 15,
//     elevation: 4,
//     /*Shadow IOS*/
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.23,
//     shadowRadius: 2.62,
//   },
// });
