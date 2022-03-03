import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { LoginScreen } from "../../features/account/screens/login.screen";
import { RegisterScreen } from "../../features/account/screens/register.screen";

const AccountStack = createStackNavigator();

export const AccountNavigator = () => {
  return (
    <AccountStack.Navigator screenOptions={{ headerShown: false }}>
      <AccountStack.Screen name="Masuk" component={LoginScreen} />
      <AccountStack.Screen name="Daftar" component={RegisterScreen} />
    </AccountStack.Navigator>
  );
};
