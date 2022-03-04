import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { HomeNavigator } from "./home.navigator";
import { HistoryNavigator } from "./history.navigator";
import { SettingsNavigator } from "./settings.navigator";

import { SymptomsContextProvider } from "../../services/symptoms/symptoms.context";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Beranda: "home",
  Riwayat: "calendar",
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
    <SymptomsContextProvider>
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
        <Tab.Screen name="Riwayat" component={HistoryNavigator} />
        <Tab.Screen name="Pengaturan" component={SettingsNavigator} />
      </Tab.Navigator>
    </SymptomsContextProvider>
  );
};
