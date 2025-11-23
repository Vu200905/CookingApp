import React from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";

const recipes = [
  {
    id: 1,
    name: "Phở bò",
    image: require("../assets/pho.jpg"),
    ingredients: ["Xương bò", "Thịt bò", "Bánh phở", "Gừng", "Hành"],
    steps: [
      "Hầm xương 2-3 giờ",
      "Nêm gia vị",
      "Chần bánh phở",
      "Xếp thịt + chan nước"
    ]
  },
  {
    id: 2,
    name: "Cơm chiên trứng",
    image: require("../assets/comchien.jpg"),
    ingredients: ["Cơm nguội", "Trứng", "Nước mắm", "Hành lá"],
    steps: [
      "Đánh trứng",
      "Xào cơm",
      "Nêm nếm",
      "Thêm hành, hoàn tất"
    ]
  },
  {
    id: 3,
    name: "Gà nướng mật ong",
    image: require("../assets/ga.jpg"),
    ingredients: ["Gà", "Mật ong", "Tỏi", "Nước tương"],
    steps: [
      "Ướp gà",
      "Nướng 200°C 40 phút",
      "Quét mật ong lần nữa"
    ]
  },
    {
    id: 4,
    name: "Thịt kho tàu",
    image: require("../assets/thitkho.jpg"),
    ingredients: ["Thịt ba rọi", "Trứng gà ta", "Nước dừa tươi","Nước mắm"],
    steps: [
      "Sơ chế ướp thịt",
      "Làm nước màu rang và rang thịt",
      "Kho thịt với nước dừa và gia vị",
    ]
  },
    {
    id: 5,
    name: "Kho quẹt",
    image: require("../assets/khoquet.jpg"),
    ingredients: ["Mỡ heo hoặc Thịt ba chỉ","Tôm khô","Hành tím, Tỏi","Ớt"],
    steps: [
      "Rang tóp mỡ và phi thơm",
      "Nấu sốt kho quẹt",
      "Kho quẹt hoàn tất",
    ]
  },
    {
    id: 6,
    name: "Mì xào hải sản",
    image: require("../assets/mixao.jpg"),
    ingredients: ["Mì trứng","Hải sản tổng hợp","Rau củ thập cẩm"],
    steps: [
      "Xào hải sản",
      "Xào rau củ",
      "Thêm mì và nêm nếm",
      "Hoàn tất và thưởng thức"
    ]
  },
    {
    id: 7,
    name: "Cá kho tộ",
    image: require("../assets/cakho.jpg"),
    ingredients: ["Cá lóc","Nước dừa tươi","Thịt ba rọi","Hành tím"],
    steps: [
      "Sơ chế cá và thịt",
      "Làm nước màu và kho cá",
      "Kho đến khi cạn nước"
    ]
  },
    {
    id: 8,
    name: "Cơm tấm",
    image: require("../assets/comtam.jpg"),
    ingredients: ["Sườn", "Cơm tấm", "Trứng", "Dưa leo", "Nước mắm"],
    steps: [
      "Ướp sườn",
      "Nướng sườn",
      "Chuẩn bị cơm và rau",
      "Thành phẩm và thưởng thức"
    ]
  },
];

export default function Home({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff", padding: 20 }}>
      {/* Header */}
      <Text style={{ fontSize: 28, fontWeight: "bold", marginBottom: 15 }}>
        Xin chào, Bạn iu 👨‍🍳
      </Text>

      {/* Featured Recipe Section */}
      <View
        style={{
          backgroundColor: "#FFE5CC",
          padding: 15,
          borderRadius: 15,
          marginBottom: 20,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../assets/comtam.jpg")}
          style={{ width: 90, height: 90, borderRadius: 15 }}
        />

        <View style={{ marginLeft: 15, flex: 1 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Món nổi bật</Text>
          <Text style={{ fontSize: 15, color: "#444" }}>Cơm tấm</Text>
        </View>
      </View>

      {/* Recipe List */}
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
        Món ăn của bạn
      </Text>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={recipes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("RecipeDetail", { item })}
            style={{
              flexDirection: "row",
              marginBottom: 15,
              padding: 12,
              backgroundColor: "#fafafa",
              borderRadius: 15,
              borderWidth: 1,
              borderColor: "#eee",
              shadowColor: "#000",
              shadowOpacity: 0.1,
              shadowRadius: 4,
              elevation: 2,
            }}
          >
            <Image
              source={item.image}
              style={{
                width: 80,
                height: 80,
                borderRadius: 15,
                marginRight: 15,
              }}
            />
            <View style={{ flex: 1, justifyContent: "center" }}>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.name}</Text>
              <Text style={{ color: "#666" }}>Xem chi tiết</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
