import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Home from "../screens/Home";
import Favorite from "../screens/Favorites";
import Notification from "../screens/Notification";
import Account from "../screens/Account";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarStyle: {
          backgroundColor: "white",
          height: 80,
          paddingBottom: 10,
          paddingTop: 10,
        },

        tabBarLabelStyle: {
          fontSize: 13,
          marginBottom: 5,
        },

        tabBarIcon: ({ color }) => {
          let iconName;

          if (route.name === "Trang chủ") iconName = "home";
          if (route.name === "Yêu thích") iconName = "heart";
          if (route.name === "Thông báo") iconName = "notifications";
          if (route.name === "Tài khoản") iconName = "person";

          return <Ionicons name={iconName} size={24} color={color} />;
        },

        tabBarActiveTintColor: "orange",
        tabBarInactiveTintColor: "#888",
      })}
    >
      <Tab.Screen name="Trang chủ" component={Home} />
      <Tab.Screen name="Yêu thích" component={Favorite} />
      <Tab.Screen name="Thông báo" component={Notification} />
      <Tab.Screen name="Tài khoản" component={Account} />
    </Tab.Navigator>
  );
}
