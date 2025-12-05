import React, { useContext } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { FavoriteContext } from "../contexts/FavoriteContext";

export default function Favorites({ navigation }) {
  const { favorites, removeFavorite } = useContext(FavoriteContext);

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "#fff" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 15 }}>
        Món ăn yêu thích
      </Text>

      {favorites.length === 0 ? (
        <Text>Chưa có món ăn yêu thích!</Text>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("RecipeDetail", { item })}
              style={{
                flexDirection: "row",
                padding: 10,
                backgroundColor: "#fafafa",
                borderRadius: 10,
                marginBottom: 10,
              }}
            >
              <Image
                source={item.image}
                style={{ width: 80, height: 80, borderRadius: 10 }}
              />
              <View style={{ marginLeft: 12, flex: 1 }}>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                  {item.name}
                </Text>

                <TouchableOpacity onPress={() => removeFavorite(item.id)}>
                  <Text style={{ color: "red", marginTop: 5 }}>Xóa ❤️</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}
