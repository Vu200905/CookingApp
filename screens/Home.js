import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
} from "react-native";

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
  {
    id: 9,
    name: "Bún chả",
    image: require("../assets/buncha.jpg"),
    ingredients: ["Thịt ba chỉ", "Bún tươi", "Rau sống", "Nước mắm pha"],
    steps: [
      "Ướp và nướng thịt",
      "Chuẩn bị bún và rau",
      "Pha nước mắm",
      "Thưởng thức"
    ]
  },
  {
    id: 10,
    name: "Cháo gà",
    image: require("../assets/chaoga.jpg"),
    ingredients: ["Gà", "Gạo", "Hành", "Gừng"],
    steps: [
      "Luộc gà",
      "Nấu cháo",
      "Thêm gà và gia vị",
      "Hoàn tất và thưởng thức"
    ]
  },
  {
    id: 11,
    name: "Bánh xèo",
    image: require("../assets/banhxeo.jpg"),
    ingredients: ["Bột gạo", "Tôm", "Thịt heo", "Giá đỗ", "Hành lá"],
    steps: [
      "Pha bột bánh xèo",
      "Chiên tôm, thịt và đổ bột",
      "Thêm giá đỗ và hành lá",
      "Gập bánh và thưởng thức"
    ]
  },
  {
    id: 12,
    name: "Nộm gà",
    image: require("../assets/nomga.jpg"),
    ingredients: ["Gà", "Rau răm", "Cà rốt", "Đậu phộng", "Nước mắm"],
    steps: [
      "Luộc gà và xé nhỏ",
      "Trộn rau răm, cà rốt và gà",
      "Rang đậu phộng",
      "Pha nước mắm và trộn đều",
      "Rắc đậu phộng lên trên và thưởng thức"
    ]
  },
  {
    id: 13,
    name: "Bò lúc lắc",
    image: require("../assets/boluclac.jpg"),
    ingredients: ["Thịt bò", "Hành tây", "Ớt chuông", "Nước sốt"],
    steps: [
      "Cắt thịt bò thành khối vuông",
      "Xào nhanh với lửa lớn",
      "Thêm hành tây và ớt chuông",
      "Thêm nước sốt và hoàn tất"
    ]
  },
  {
    id: 14,
    name: "Canh chua cá lóc",
    image: require("../assets/canhchua.jpg"),
    ingredients: ["Cá", "Cà chua", "Dứa", "Me", "Rau ngổ"],
    steps: [
      "Sơ chế cá",
      "Nấu nước dùng chua ngọt",
      "Thêm cá và rau ngổ",
      "Hoàn tất và thưởng thức"
    ]
  },
  {
    id: 15,
    name: "Bánh mì thịt",
    image: require("../assets/banhmi.jpg"),
    ingredients: ["Bánh mì", "Thịt nguội", "Pate", "Rau thơm", "Nước sốt"],
    steps: [
      "Chuẩn bị bánh mì và các loại nhân",
      "Lắp ráp bánh mì",
      "Thưởng thức"
    ]
  },
  {
    id: 16,
    name: "Lẩu thái",
    image: require("../assets/lauthai.jpg"),
    ingredients: ["Hải sản", "Nấm", "Rau củ", "Nước lẩu Thái"],
    steps: [
      "Chuẩn bị nguyên liệu",
      "Nấu nước lẩu Thái",
      "Thêm nguyên liệu vào nồi lẩu",
      "Thưởng thức"
    ]
  },
  {
    id: 17,
    name: "Chả giò",
    image: require("../assets/chagio.jpg"),
    ingredients: ["Bánh tráng", "Thịt heo", "Tôm", "Nấm mèo", "Cà rốt", "Hành tím"],
    steps: [
      "Chuẩn bị nhân chả giò",
      "Cuốn chả giò",
      "Chiên chả giò",
      "Thưởng thức"
    ]   
  },
  {
    id: 18,
    name: "Bánh cuốn",
    image: require("../assets/banhcuon.jpg"),
    ingredients: ["Bột gạo", "Thịt heo", "Nấm mèo", "Hành lá", "Nước chấm"],
    steps: [
      "Pha bột bánh cuốn",
      "Tráng bánh cuốn",
      "Chuẩn bị nhân và nước chấm",
      "Thưởng thức"
    ]
  },
  {
    id: 19,
    name: "Xôi gà",
    image: require("../assets/xoiga.jpg"),
    ingredients: ["Gạo nếp", "Gà", "Hành phi", "Đậu xanh", "Gia vị"],
    steps: [
      "Vo gạo nếp và ngâm",
      "Luộc gà và xé nhỏ",
      "Nấu xôi",
      "Trộn xôi với gà và hành phi",
      "Thưởng thức"
    ]
  },
  {
    id: 20,
    name: "Mực xào chua ngọt",
    image: require("../assets/mucxao.jpg"),
    ingredients: ["Mực", "Dứa", "Ớt chuông", "Nước sốt chua ngọt"],
    steps: [
      "Sơ chế mực",
      "Xào mực với dứa và ớt chuông",
      "Thêm nước sốt chua ngọt và hoàn tất"
    ]
  },
  {
    id: 21,
    name: "Bò nướng lá lốt",
    image: require("../assets/bonuonglalot.jpg"),
    ingredients: ["Thịt bò", "Lá lốt", "Gia vị"],
    steps: [
      "Ướp thịt bò với gia vị",
      "Cuốn thịt bò vào lá lốt",
      "Nướng trên than hoa",
      "Thưởng thức"
    ]
  },
  {
    id: 22,
    name: "Súp cua",
    image: require("../assets/supcua.jpg"),
    ingredients: ["Cua", "Nấm", "Trứng", "Hành lá", "Gia vị"],
    steps: [
      "Sơ chế cua",
      "Nấu súp với nấm và cua",
      "Thêm trứng và hành lá",
      "Hoàn tất và thưởng thức"
    ]
  },
  {
    id: 23,
    name: "Bánh tôm Hồ Tây",
    image: require("../assets/banhtom.jpg"),
    ingredients: ["Tôm", "Bột chiên giòn", "Rau sống", "Nước mắm chua ngọt"],
    steps: [
      "Chuẩn bị tôm và bột chiên giòn",
      "Chiên tôm với bột",
      "Chuẩn bị rau sống và nước mắm",
      "Thưởng thức"
    ]
  },
  {
    id: 24,
    name: "Gỏi cuốn",
    image: require("../assets/goicuon.jpg"),
    ingredients: ["Bánh tráng", "Tôm", "Thịt heo", "Rau sống", "Nước chấm"],
    steps: [
      "Chuẩn bị nguyên liệu",
      "Cuốn gỏi cuốn",
      "Pha nước chấm",
      "Thưởng thức"
    ]
  },
  {
    id: 25,
    name: "Bún bò Huế",
    image: require("../assets/bunbohue.jpg"),
    ingredients: ["Bún", "Thịt bò", "Giò heo", "Huyết", "Rau sống", "Gia vị"],
    steps: [
      "Chuẩn bị nguyên liệu",
      "Nấu nước dùng",
      "Chần bún và các loại rau",
      "Thưởng thức"
    ]
  },
  {
    id: 26,
    name: "Cá chiên xù",
    image: require("../assets/cachienxu.jpg"),
    ingredients: ["Cá", "Bột chiên xù", "Dầu ăn", "Gia vị"],
    steps: [
      "Sơ chế cá",
      "Tẩm bột chiên xù",
      "Chiên cá đến khi vàng giòn",
      "Thưởng thức"
    ]
  },
  {
    id: 27,
    name: "Trà sữa trân châu",
    image: require("../assets/trasua.jpg"),
    ingredients: ["Trà", "Sữa", "Trân châu", "Đường"],
    steps: [
      "Pha trà",
      "Thêm sữa và đường",
      "Nấu trân châu",
      "Kết hợp và thưởng thức"
    ]
  },
  {
    id: 28,
    name: "Bánh chưng",
    image: require("../assets/banhchung.jpg"),
    ingredients: ["Gạo nếp", "Đậu xanh", "Thịt lợn", "Lá dong", "Gia vị"],
    steps: [
      "Ngâm gạo nếp và đậu xanh",
      "Ướp thịt với gia vị",
      "Gói bánh với lá dong",
      "Luộc bánh trong nhiều giờ",
      "Thưởng thức"
    ]
  },
  {
    id: 29,
    name: "Chè ba màu",
    image: require("../assets/chebamau.jpg"),
    ingredients: ["Đậu xanh", "Đậu đỏ", "Đậu trắng", "Nước cốt dừa", "Đường"],
    steps: [
      "Nấu các loại đậu",
      "Pha nước cốt dừa với đường",
      "Kết hợp các nguyên liệu",
      "Thưởng thức"
    ]
  },
  {
    id: 30,
    name: "Bánh bèo",
    image: require("../assets/banhbeo.jpg"),
    ingredients: ["Bột gạo", "Tôm", "Hành lá", "Nước mắm", "Gia vị"],
    steps: [
      "Chuẩn bị bột gạo",
      "Hấp bánh",
      "Chuẩn bị tôm và hành lá",
      "Pha nước mắm",
      "Thưởng thức"
    ]
  },
  {
    id: 31,
    name: "Cà ri gà",
    image: require("../assets/cariga.jpg"),
    ingredients: ["Gà", "Cà ri", "Khoai tây", "Cà rốt", "Nước cốt dừa", "Gia vị"],
    steps: [
      "Sơ chế gà",
      "Nấu cà ri với gà và các nguyên liệu",
      "Thêm nước cốt dừa",
      "Hoàn tất và thưởng thức"
    ]
  },
  {
    id: 32,
    name: "Bánh khọt",
    image: require("../assets/banhkhot.jpg"),
    ingredients: ["Bột gạo", "Tôm", "Hành lá", "Dầu ăn", "Gia vị"],
    steps: [
      "Chuẩn bị bột gạo",
      "Chiên bánh với tôm và hành lá",
      "Thưởng thức"
    ]
  },
  {
    id: 33,
    name: "Ốc luộc",
    image: require("../assets/ocluoc.jpg"),
    ingredients: ["Ốc", "Sả", "Ớt", "Muối", "Gia vị"],
    steps: [
      "Rửa sạch ốc",
      "Luộc ốc với sả và ớt",
      "Pha nước chấm",
      "Thưởng thức"
    ]
  },
  {
    id: 34,
    name: "Bún riêu",
    image: require("../assets/bunrieu.jpg"),
    ingredients: ["Bún", "Cua", "Đậu phụ", "Rau sống", "Gia vị"],
    steps: [
      "Chuẩn bị nguyên liệu",
      "Nấu nước dùng cua",
      "Chần bún và các loại rau",
      "Thưởng thức"
    ]
  },
  {
    id: 35,
    name: "Gà hấp lá chanh",
    image: require("../assets/gahaplachanh.jpg"),
    ingredients: ["Gà", "Lá chanh", "Gia vị"],
    steps: [
      "Sơ chế gà",
      "Ướp gà với lá chanh và gia vị",
      "Hấp gà",
      "Thưởng thức"
    ]
  },
  {
    id: 36,
    name: "Bò kho",
    image: require("../assets/bokho.jpg"),
    ingredients: ["Thịt bò", "Cà rốt", "Khoai tây", "Gia vị"],
    steps: [
      "Sơ chế thịt bò",
      "Nấu bò kho với các nguyên liệu",
      "Thưởng thức"
    ]
  },
  {
    id: 37,
    name: "Cháo lòng",
    image: require("../assets/chaolong.jpg"),
    ingredients: ["Lòng heo", "Gạo", "Hành lá", "Gia vị"],
    steps: [
      "Sơ chế lòng heo",
      "Nấu cháo với gạo và lòng heo",
      "Thêm hành lá và gia vị",
      "Thưởng thức"
    ]
  },
  {
    id: 38,
    name: "Bánh da lợn",
    image: require("../assets/banhdalon.jpg"),
    ingredients: ["Bột năng", "Đậu xanh", "Nước cốt dừa", "Đường", "Lá dứa"],
    steps: [
      "Chuẩn bị nguyên liệu",
      "Trộn bột với nước cốt dừa và đường",
      "Hấp từng lớp với lá dứa",
      "Thưởng thức"
    ]
  },
  {
    id: 39,
    name: "Lẩu cá kèo",
    image: require("../assets/laucakeo.jpg"),
    ingredients: ["Cá kèo", "Rau muống", "Đậu hũ", "Nước lẩu"],
    steps: [
      "Chuẩn bị nguyên liệu",
      "Nấu nước lẩu",
      "Thêm cá kèo và các nguyên liệu khác",
      "Thưởng thức"
    ]
  },
  {
    id: 40,
    name: "Lẩu bò nhúng dấm",
    image: require("../assets/bonhungdam.jpg"),
    ingredients: ["Thịt bò", "Rau sống", "Bún", "Nước lẩu dấm"],
    steps: [
      "Chuẩn bị nguyên liệu",
      "Nấu nước lẩu dấm",
      "Nhúng thịt bò và các nguyên liệu khác",
      "Thưởng thức"
    ]
  },
  {
    id: 41,
    name: "Lẩu hải sản",
    image: require("../assets/lauhaisan.jpg"),
    ingredients: ["Hải sản", "Rau củ", "Nước lẩu hải sản"],
    steps: [
      "Chuẩn bị nguyên liệu",
      "Nấu nước lẩu hải sản",
      "Thêm hải sản và các nguyên liệu khác",
      "Thưởng thức"
    ]
  },
  {
    id: 42,
    name: "Lẩu gà ớt hiểm",
    image: require("../assets/laugaothiem.jpg"),
    ingredients: ["Gà", "Ớt hiểm", "Rau củ", "Nước lẩu gà"],
    steps: [
      "Chuẩn bị nguyên liệu",
      "Nấu nước lẩu gà",
      "Thêm gà, ớt hiểm và các nguyên liệu khác",
      "Thưởng thức"
    ]
  },
  {
    id: 43,
    name: "Lẩu cua đồng",
    image: require("../assets/laucuadong.jpg"),
    ingredients: ["Cua đồng", "Rau muống", "Đậu hũ", "Nước lẩu cua"],
    steps: [
      "Chuẩn bị nguyên liệu",
      "Nấu nước lẩu cua",
      "Thêm cua đồng và các nguyên liệu khác",
      "Thưởng thức"
    ]
  },
  {
    id: 44,
    name: "Lẩu mắm",
    image: require("../assets/laumam.jpg"),
    ingredients: ["Cá", "Rau củ", "Nước lẩu mắm"],
    steps: [
      "Chuẩn bị nguyên liệu",
      "Nấu nước lẩu mắm",
      "Thêm cá và các nguyên liệu khác",
      "Thưởng thức"
    ]
  },
  {
    id: 45,
    name: "Lẩu cá bớp",
    image: require("../assets/laucabop.jpg"),
    ingredients: ["Cá bớp", "Rau củ", "Nước lẩu cá bớp"],
    steps: [
      "Chuẩn bị nguyên liệu",
      "Nấu nước lẩu cá bớp",
      "Thêm cá bớp và các nguyên liệu khác",
      "Thưởng thức"
    ]
  },
  {
    id: 46,
    name: "Lẩu Thái hải sản",
    image: require("../assets/lauthaihaisan.jpg"),
    ingredients: ["Hải sản", "Rau củ", "Nước lẩu Thái"],
    steps: [
      "Chuẩn bị nguyên liệu",
      "Nấu nước lẩu Thái",
      "Thêm hải sản và các nguyên liệu khác",
      "Thưởng thức"
    ]
  },
  {
    id: 47,
    name: "Lẩu nấm",
    image: require("../assets/launam.jpg"),
    ingredients: ["Nấm", "Rau củ", "Nước lẩu nấm"],
    steps: [
      "Chuẩn bị nguyên liệu",
      "Nấu nước lẩu nấm",
      "Thêm nấm và các nguyên liệu khác",
      "Thưởng thức"
    ]
  },
  {
    id: 48,
    name: "Lẩu chay",
    image: require("../assets/lauchay.jpg"),
    ingredients: ["Rau củ", "Nấm", "Nước lẩu chay"],
    steps: [
      "Chuẩn bị nguyên liệu",
      "Nấu nước lẩu chay",
      "Thêm rau củ, nấm và các nguyên liệu khác",
      "Thưởng thức"
    ]
  },
  {
    id: 49,
    name: "Lẩu rau xanh",
    image: require("../assets/laurauxanh.jpg"),
    ingredients: ["Rau xanh", "Nước lẩu rau xanh"],
    steps: [
      "Chuẩn bị nguyên liệu",
      "Nấu nước lẩu rau xanh",
      "Thêm rau xanh, các nguyên liệu khác",
      "Thưởng thức"
    ]
  },
  {
    id: 50,
    name: "Lẩu đuôi bò",
    image: require("../assets/lauduoibo.jpg"),
    ingredients: ["Đuôi bò", "Rau củ", "Nước lẩu đuôi bò"],
    steps: [
      "Chuẩn bị nguyên liệu",
      "Nấu nước lẩu đuôi bò",
      "Thêm đuôi bò và các nguyên liệu khác",
      "Thưởng thức"
    ]
  },
  {
    id: 51,
    name: "Lẩu cá hồi",
    image: require("../assets/laucahoi.jpg"),
    ingredients: ["Cá hồi", "Rau củ", "Nước lẩu cá hồi"],
    steps: [
      "Chuẩn bị nguyên liệu",
      "Nấu nước lẩu cá hồi",
      "Thêm cá hồi và các nguyên liệu khác",
      "Thưởng thức"
    ]
  },
  {
    id: 52,
    name: "Lẩu sườn sụn",
    image: require("../assets/lausuonsun.jpg"),
    ingredients: ["Sườn sụn", "Rau củ", "Nước lẩu sườn sụn"],
    steps: [
      "Chuẩn bị nguyên liệu",
      "Nấu nước lẩu sườn sụn",
      "Thêm sườn sụn và các nguyên liệu khác",
      "Thưởng thức"
    ]
  },
  {
    id: 53,
    name: "Lẩu gà lá é",
    image: require("../assets/laugalae.jpg"),
    ingredients: ["Gà", "Lá é", "Rau củ", "Nước lẩu gà lá é"],
    steps: [
      "Chuẩn bị nguyên liệu",
      "Nấu nước lẩu gà lá é",
      "Thêm gà, lá é và các nguyên liệu khác",
      "Thưởng thức"
    ]
  },
  {
    id: 54,
    name: "Lẩu cá trắm",
    image: require("../assets/laucatram.jpg"),
    ingredients: ["Cá trắm", "Rau củ", "Nước lẩu cá trắm"],
    steps: [
      "Chuẩn bị nguyên liệu",
      "Nấu nước lẩu cá trắm",
      "Thêm cá trắm và các nguyên liệu khác",
      "Thưởng thức"
    ]
  },
  {
    id: 55,
    name: "Lẩu bò sa tế",
    image: require("../assets/laubosate.jpg"),
    ingredients: ["Thịt bò", "Rau củ", "Nước lẩu sa tế"],
    steps: [
      "Chuẩn bị nguyên liệu",
      "Nấu nước lẩu sa tế",
      "Thêm thịt bò và các nguyên liệu khác",
      "Thưởng thức"
    ]
  },
  {
    id: 56,
    name: "Lẩu cá đuối",
    image: require("../assets/laucaduoi.jpg"),
    ingredients: ["Cá đuối", "Rau củ", "Nước lẩu cá đuối"],
    steps: [
      "Chuẩn bị nguyên liệu",
      "Nấu nước lẩu cá đuối",
      "Thêm cá đuối và các nguyên liệu khác",
      "Thưởng thức"
    ]
  },
  {
    id: 57,
    name: "Cơm chiên dương châu",
    image: require("../assets/comchienduongchau.jpg"),
    ingredients: ["Cơm", "Thịt lợn", "Tôm", "Trứng", "Rau củ"],
    steps: [
      "Chuẩn bị nguyên liệu",
      "Chiên cơm với thịt lợn, tôm, trứng và rau củ",
      "Thưởng thức"
    ]
  },
  {
    id: 58,
    name: "Cơm gà xối mỡ",
    image: require("../assets/comgaxoimo.jpg"),
    ingredients: ["Gà", "Cơm", "Dầu mỡ", "Rau củ"],
    steps: [
      "Chuẩn bị nguyên liệu",
      "Chiên gà với dầu mỡ",
      "Ăn kèm với cơm và rau củ",
      "Thưởng thức"
    ]
  },
  {
    id: 59,
    name: "Cơm cháy kho quẹt",
    image: require("../assets/comchaykhoquet.jpg"),
    ingredients: ["Cơm cháy", "Kho quẹt", "Rau sống"],
    steps: [
      "Chuẩn bị nguyên liệu",
      "Chiên cơm cháy",
      "Ăn kèm với kho quẹt và rau sống",
      "Thưởng thức"
    ]
  },
];


export default function Home({ navigation }) {

  // BƯỚC 1: Tạo state cho tìm kiếm
  const [search, setSearch] = useState("");

  // BƯỚC 2: Danh sách sau khi lọc
  const filteredRecipes = recipes.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={{ flex: 1, backgroundColor: "#fff", padding: 20 }}>

      {/* Header */}
      <Text style={{ fontSize: 28, fontWeight: "bold", marginBottom: 15 }}>
        Xin chào, Bạn iu 👨‍🍳
      </Text>

      {/* Thanh tìm kiếm */}
      <TextInput
        placeholder="Tìm món ăn..."
        value={search}
        onChangeText={setSearch}
        style={{
          backgroundColor: "#f2f2f2",
          padding: 12,
          borderRadius: 12,
          marginBottom: 15,
          borderWidth: 1,
          borderColor: "#ddd",
        }}
      />

      {/* Featured Recipe */}
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

      {/* Title */}
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
        Món ăn đề xuất
      </Text>

      {/* List đã LỌC */}
      <FlatList
        showsVerticalScrollIndicator={false}
        data={filteredRecipes}
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
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                {item.name}
              </Text>
              <Text style={{ color: "#666" }}>Xem chi tiết</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
