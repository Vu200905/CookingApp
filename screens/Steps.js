import React from "react";
import { View, Text, ScrollView } from "react-native";

export default function Steps({ route }) {
  const { steps } = route.params;

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff", padding: 20 }}>
      
      {/* Tiêu đề */}
      <Text
        style={{
          fontSize: 28,
          fontWeight: "bold",
          marginBottom: 20,
          textAlign: "center",
        }}
      >
        Các bước nấu
      </Text>

      {/* Danh sách các bước */}
      {steps.map((step, index) => (
        <View
          key={index}
          style={{
            backgroundColor: "#FFF7EC",
            padding: 15,
            borderRadius: 12,
            marginBottom: 15,
            flexDirection: "row",
            alignItems: "flex-start",
          }}
        >
          {/* Số thứ tự */}
          <View
            style={{
              width: 35,
              height: 35,
              backgroundColor: "orange",
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              marginRight: 12,
            }}
          >
            <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
              {index + 1}
            </Text>
          </View>

          {/* Nội dung bước */}
          <Text style={{ fontSize: 16, flex: 1 }}>{step}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
