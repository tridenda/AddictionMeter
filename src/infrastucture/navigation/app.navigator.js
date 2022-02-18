import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

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
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        headerShown: true,
        headerTitleAlign: "center",
      })}
    >
      <Tab.Screen name="Home" component={() => null} />
      <Tab.Screen name="History" component={() => null} />
      <Tab.Screen name="Settings" component={() => null} />
    </Tab.Navigator>
  );
};
