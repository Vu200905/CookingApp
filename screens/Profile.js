import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Account({ navigation }) {
  return (
    <View style={styles.container}>
      
      {/* Avatar */}
      <View style={styles.header}>
        <Image
          source={{ uri: "https://i.imgur.com/3ORbVfM.png" }}
          style={styles.avatar}
        />
        <Text style={styles.name}>Bạn iu 👨‍🍳</Text>
        <Text style={styles.email}>youremail@.com</Text>
      </View>

      {/* MENU */}
      <View style={styles.menu}>

        <MenuItem icon="person-circle" title="Hồ sơ cá nhân" />
        <MenuItem icon="heart" title="Món yêu thích" />
        <MenuItem icon="restaurant" title="Lịch sử nấu ăn" />
        <MenuItem icon="settings" title="Cài đặt" />
        <MenuItem icon="log-out" title="Đăng xuất" color="red" />

      </View>
    </View>
  );
}

const MenuItem = ({ icon, title, color }) => (
  <TouchableOpacity style={styles.item}>
    <Ionicons name={icon} size={24} color={color || "#333"} />
    <Text style={[styles.itemText, { color: color || "#333" }]}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
  },

  header: {
    alignItems: "center",
    marginBottom: 30,
  },

  avatar: {
    width: 110,
    height: 110,
    borderRadius: 999,
    marginBottom: 10,
  },

  name: {
    fontSize: 22,
    fontWeight: "bold",
  },

  email: {
    fontSize: 14,
    color: "#666",
    marginTop: 3,
  },

  menu: {
    marginTop: 20,
    paddingHorizontal: 25,
  },

  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },

  itemText: {
    marginLeft: 15,
    fontSize: 17,
  },
});
