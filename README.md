# 🍽 COOKINGAPP — Ứng dụng Hướng Dẫn Nấu Ăn

CookingApp là ứng dụng giúp người dùng xem công thức nấu ăn, xem chi tiết nguyên liệu, bước chế biến và lưu món ăn yêu thích một cách nhanh chóng.  
Ứng dụng được phát triển bằng **React Native + Expo**, tương thích Android & iOS.

---

## 🌟 Mục tiêu dự án

- Xây dựng kho công thức món ăn Việt Nam kèm hình ảnh thực tế  
- Hỗ trợ người mới nấu ăn dễ tiếp cận thông qua hướng dẫn chi tiết  
- Tối ưu thao tác trên mobile: giao diện đơn giản, trực quan, mượt  
- Giảm thời gian tìm món → Chọn món → Xem nguyên liệu → Bắt đầu nấu

---

## 🚀 Tính năng nổi bật

| Tính năng | Mô tả |
|---|---|
| 📜 Danh sách món ăn | Hiển thị list món có hình ảnh + mô tả |
| 🔍 Xem chi tiết món | Xem **nguyên liệu**, **cách chế biến**, thời gian nấu |
| ❤️ lưu Favorite | Người dùng đánh dấu món yêu thích, lưu lại không mất |
| 👤 Tài khoản người dùng | Đăng nhập / đăng ký, lưu trạng thái với UserContext |
| 🔔 Thông báo món mới | Có thể phát triển để push thông báo cập nhật |
| 🧭 Điều hướng hiện đại | Bottom Tab + Stack Navigation trực quan |
| 🗂 Lưu dữ liệu cục bộ | Async Storage giúp giữ Favorite ngay cả khi thoát app |

---

## 📁 Cấu trúc thư mục dự án

CookingApp/
├─ assets/ # Kho ảnh 50+ món ăn Việt Nam
│ ├─ bunbohue.jpg, banhxeo.jpg,...
│ └─ meocute.png (ảnh user mặc định)
├─ screens/
│ ├─ Home.js # Mặc định hiển thị danh sách món
│ ├─ RecipeDetail.js # Chi tiết món - nguyên liệu + bước làm
│ ├─ Favorites.js # Danh sách món đã lưu
│ ├─ Profile.js # Trang cá nhân người dùng
│ ├─ Notification.js # Màn hình thông báo
│ ├─ Login.js / Signup.js # Xác thực tài khoản
├─ contexts/
│ ├─ UserContext.js # Lưu trạng thái đăng nhập
│ └─ FavoriteContext.js # Quản lý Favorite global
├─ navigation/
│ ├─ TabNavigator.js # Điều hướng tab chính Home-Favorite-Profile
├─ App.js # Entry chính của ứng dụng
├─ app.json / eas.json # Config Expo + build mobile
├─ package.json # Thư viện và scripts
└─ README.md # File mô tả này

---

## 🔧 Kiến trúc và luồng hoạt động

Ứng dụng sử dụng **Context API** làm state management chính:
Login / Signup → UserContext → Profile / App navigation
↓
FavoriteContext → Favorites Screen (render real-time)

📌 Khi người dùng nhấn Favorite → context cập nhật → UI render lại ngay không cần reload.

---

## 🛠 Công nghệ sử dụng

| Công nghệ | Vai trò |
|---|---|
| React Native | UI mobile chính |
| Expo | Build + preview bằng QR nhanh chóng |
| React Navigation | Điều hướng giữa các màn hình |
| Context API | Quản lý trạng thái toàn cục |
| Async Storage | Lưu dữ liệu cục bộ, giữ Favorite khi thoát app |

---

## 🚀 Cách cài đặt và chạy dự án

```bash
npm install
npx expo start

---

### 📌 Bây giờ bạn chỉ cần:

🔹 Vào repo CookingApp  
🔹 Bấm **Add README** → paste nội dung ở trên vào  
🔹 Commit → README sẽ hiển thị ngay lập tức ⭐

---

Nếu bạn muốn mình làm phiên bản README **có banner, màu UI, thêm icon, screenshot… đẹp như Landing Page**, chỉ cần gửi 2–3 hình giao diện ứng dụng 👉 mình sẽ nâng cấp lên UI cực đẹp cho bạn 😎🔥

