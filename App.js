import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Start from "./screens/Start";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import RecipeDetail from "./screens/RecipeDetail";
import Steps from "./screens/Steps";
import TabNavigator from "./navigation/TabNavigator";

import FavoriteProvider from "./contexts/FavoriteContext";

const Stack = createStackNavigator();

export default function App() {
  return (
    <FavoriteProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Start" component={Start} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Home" component={TabNavigator} />
          <Stack.Screen name="RecipeDetail" component={RecipeDetail} />
          <Stack.Screen name="Steps" component={Steps} />
        </Stack.Navigator>
      </NavigationContainer>
    </FavoriteProvider>
  );
}
