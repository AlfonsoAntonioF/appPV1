import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CartStack from "./CartStack";
import ShopStack from "./ShopStack";
import OrdersStack from "./OrdersStack";
import TabBarIcon from "../Components/TabBarIcon";
import colors from "../src/color";
import ProfileStack from "./ProfileStack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="ShopStack"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tab.Screen
        name="ShopStack"
        component={ShopStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon title="Inicio" nameIcon="home" focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="CartStack"
        component={CartStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              title="Carrito"
              nameIcon="shopping-cart"
              focused={focused}
            />
          ),
        }}
      />
      <Tab.Screen
        name="OrdersStack"
        component={OrdersStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon title="Ordenes" nameIcon="list" focused={focused} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Favorites"
        component={FavsNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon title="Favoritos" nameIcon="heart" focused={focused} />
          ),
        }}
      /> */}
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon title="Mi cuenta" nameIcon="user" focused={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.bgFondo,
    height: 80,
    position: "absolute",
    left: 20,
    right: 20,
    bottom: 25,
    borderRadius: 15,
    elevation: 4,
    /*Shadow IOS*/
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
});
