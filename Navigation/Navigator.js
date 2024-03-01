import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ShopStack from "./ShopStack";
import colors from "../src/color";
import TabBarIcon from "../Components/TabBarIcon";
import CartStack from "./CartStack";
import OrdersStack from "./OrdersStack";
import FavsNavigator from "./FavsNavigator";
import User from "./User";
const Tab = createBottomTabNavigator();
const Navigator = () => {
  return (
    <NavigationContainer>
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
        <Tab.Screen
        name='Favorites'
        component={FavsNavigator}
        options={{
            tabBarIcon: ({ focused }) => (
              <TabBarIcon title="Favoritos" nameIcon="heart" focused={focused} />
            ),
          }}
        
        />
        <Tab.Screen
        name='User'
        component={User}
        options={{
            tabBarIcon: ({ focused }) => (
              <TabBarIcon title="Mi cuenta" nameIcon="user" focused={focused} />
            ),
          }}
        
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;

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
