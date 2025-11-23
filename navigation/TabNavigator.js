import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Home from "../screens/Home";
import Signup from "../screens/Signup";
import Login from "../screens/Login";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "white",
          height: 60,
          paddingBottom: 5,
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },

        // ICON CHO TỪNG TAB
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Trang chủ") iconName = "home";
          else if (route.name === "Yêu thích") iconName = "heart";
          else if (route.name === "Thông báo") iconName = "notifications";
          else if (route.name === "Tài khoản") iconName = "person";

          return <Ionicons name={iconName} size={24} color={color} />;
        },

        tabBarActiveTintColor: "orange",
        tabBarInactiveTintColor: "#999",
      })}
    >
      <Tab.Screen name="Trang chủ" component={Home} />
      <Tab.Screen name="Yêu thích" component={Signup} />
      <Tab.Screen name="Thông báo" component={Login} />
      <Tab.Screen name="Tài khoản" component={Signup} />
    </Tab.Navigator>
  );
}
