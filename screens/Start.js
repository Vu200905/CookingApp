import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

export default function Start({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <Image
        source={require("../assets/icon.png")}
        style={{
          width: 140,
          height: 140,
          marginBottom: 30,
        }}
      />

      <Text
        style={{
          fontSize: 28,
          fontWeight: "bold",
          marginBottom: 40,
          textAlign: "center",
        }}
      >
        Cooking App
      </Text>

      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        style={{
          width: "80%",
          backgroundColor: "orange",
          padding: 15,
          borderRadius: 10,
          marginBottom: 15,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "#fff",
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          Bắt đầu
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
        <Text style={{ color: "blue", fontSize: 16 }}>
          Bạn chưa có tài khoản? Đăng ký
        </Text>
      </TouchableOpacity>
    </View>
  );
}
