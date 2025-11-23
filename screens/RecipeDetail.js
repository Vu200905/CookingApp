import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";

export default function RecipeDetail({ route, navigation }) {
  const { item } = route.params;

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* Ảnh món ăn */}
      <Image
        source={item.image}
        style={{
          width: "100%",
          height: 260,
        }}
      />

      {/* Nội dung */}
      <View
        style={{
          backgroundColor: "#fff",
          marginTop: -20,
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          padding: 20,
          shadowOpacity: 0.3,
          shadowRadius: 10,
          shadowColor: "#000",
        }}
      >
        {/* Tên món ăn */}
        <Text style={{ fontSize: 28, fontWeight: "bold", marginBottom: 10 }}>
          {item.name}
        </Text>

        {/* Box nguyên liệu */}
        <View
          style={{
            backgroundColor: "#FFF7EC",
            padding: 15,
            borderRadius: 15,
            marginTop: 10,
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              marginBottom: 10,
              color: "#FF7A00",
            }}
          >
            Nguyên liệu
          </Text>

          {item.ingredients.map((ing, index) => (
            <Text key={index} style={{ fontSize: 16, marginBottom: 5 }}>
              • {ing}
            </Text>
          ))}
        </View>

        {/* Nút xem các bước */}
        <TouchableOpacity
          onPress={() => navigation.navigate("Steps", { steps: item.steps })}
          style={{
            backgroundColor: "orange",
            paddingVertical: 14,
            borderRadius: 12,
            alignItems: "center",
            marginBottom: 30,
          }}
        >
          <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
            Xem các bước nấu
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
