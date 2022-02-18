import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { HomeNavigator } from "./home.navigator";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Beranda: "home",
  Riwayat: "layers",
  Pengaturan: "md-settings",
};

const createTabBarIcon = (route) => {
  const iconName = TAB_ICON[route.name];

  return ({ size, color }) => (
    <Ionicons name={iconName} size={size} color={color} />
  );
};

export const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: createTabBarIcon(route),
        tabBarActiveTintColor: "#005152",
        tabBarInactiveTintColror: "#808080",
        headerShown: false,
        headerTitleAlign: "center",
      })}
    >
      <Tab.Screen name="Beranda" component={HomeNavigator} />
      <Tab.Screen name="Riwayat" component={() => null} />
      <Tab.Screen name="Pengaturan" component={() => null} />
    </Tab.Navigator>
  );
};
