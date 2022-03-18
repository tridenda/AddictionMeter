import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { SettingsScreen } from "../../features/settings/screens/settings.screen";
import { EditPasswordScreen } from "../../features/settings/screens/edit-password.screen";
import { EditProfileScreen } from "../../features/settings/screens/edit-profile.screen";

const SettingsStack = createStackNavigator();

export const SettingsNavigator = () => {
  return (
    <SettingsStack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
      <SettingsStack.Screen name="Pengaturan" component={SettingsScreen} />
      <SettingsStack.Screen name="Ubah Profil" component={EditProfileScreen} />
      <SettingsStack.Screen
        name="Ubah Kata Sandi"
        component={EditPasswordScreen}
      />
    </SettingsStack.Navigator>
  );
};
