import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { HomeNavigator } from "./home.navigator";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Home: "home",
  History: "layers",
  Settings: "md-settings",
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
        headerShown: true,
        headerTitleAlign: "center",
      })}
    >
      <Tab.Screen name="Home" component={HomeNavigator} />
      <Tab.Screen name="History" component={() => null} />
      <Tab.Screen name="Settings" component={() => null} />
    </Tab.Navigator>
  );
};
