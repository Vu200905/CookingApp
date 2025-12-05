import React from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Account({ navigation }) {
  // Danh sách món ăn yêu thích (demo)
  const favorites = [
    { id: 1, name: "Bếp cá nhân", icon: "fast-food" },
    { id: 2, name: "Các bạn bếp", icon: "people" },
    { id: 3, name: "Thử thách", icon: "information-circle" },
    { id: 4, name: "Gửi góp ý", icon: "chatbubbles" },
    { id: 5, name: "Trợ giúp", icon: "help-circle" },
    { id: 6, name: "Điều khoản", icon: "document-text" },
    { id: 7, name: "Cài đặt", icon: "settings" },
  ];

  // Hàm đăng xuất → quay về Login
  const handleLogout = () => {
    navigation.replace("Login");
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#fff", padding: 20 }}>

      {/* Avatar + Tên */}
      <View style={{ alignItems: "center", marginTop: 40 }}>
        <Image
          source={require("../assets/meocute.png")}
          style={{
            width: 120,
            height: 120,
            borderRadius: 60,
            marginBottom: 15,
            borderWidth: 3,
            borderColor: "#ffa726",
          }}
        />

        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Bạn iu </Text>
        <Text style={{ fontSize: 16, color: "#666", marginTop: 5 }}>
          baniu@gmail.com
        </Text>
      </View>

      {/* --- DANH SÁCH MÓN YÊU THÍCH --- */}
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          marginTop: 35,
          marginBottom: 10,
        }}
      >
        Mục lục 
      </Text>

      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 12,
              backgroundColor: "#fafafa",
              borderRadius: 12,
              marginBottom: 10,
              borderWidth: 1,
              borderColor: "#eee",
            }}
          >
            <Ionicons name={item.icon} size={24} color="orange" />
            <Text style={{ marginLeft: 12, fontSize: 16 }}>{item.name}</Text>
          </View>
        )}
      />

      {/* --- ĐĂNG XUẤT --- */}
      <TouchableOpacity
        onPress={handleLogout}
        style={{
          width: "100%",
          marginTop: 20,
          backgroundColor: "orange",
          paddingVertical: 14,
          borderRadius: 10,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
          Đăng xuất
        </Text>
      </TouchableOpacity>
    </View>
  );
}
