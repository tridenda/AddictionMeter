import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { MenuScreen } from "../../features/menu/screens/menu.screen";
import { DetectionScreen } from "../../features/detection/screens/detection.screen";
import { ResultScreen } from "../../features/detection/screens/result.screen";
import { HistoryScreen } from "../../features/history/screens/history.screen";
import { DetailScreen } from "../../features/history/screens/detail.screen";
import { AboutScreen } from "../../features/about/screens/about.screen";
import { SymptomsScreen } from "../../features/symptoms/screens/symptoms.screen";
import { AddSymptomScreen } from "../../features/symptoms/screens/add-symptom.screen";
import { EditSymptomScreen } from "../../features/symptoms/screens/edit-symptom.screen";
import { LevelsScreen } from "../../features/levels/screens/levels.screen";
import { AddLevelScreen } from "../../features/levels/screens/add-level.screen";
import { EditLevelScreen } from "../../features/levels/screens/edit-level.screen";
import { SettingsScreen } from "../../features/settings/screens/settings.screen";
import { EditPasswordScreen } from "../../features/settings/screens/edit-password.screen";

const HomeStack = createStackNavigator();

export const HomeNavigator = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
      <HomeStack.Screen name="Beranda" component={MenuScreen} />

      <HomeStack.Screen name="Deteksi Kecanduan" component={DetectionScreen} />
      <HomeStack.Screen name="Hasil" component={ResultScreen} />

      <HomeStack.Screen name="Riwayat" component={HistoryScreen} />
      <HomeStack.Screen name="Detil Riwayat" component={DetailScreen} />

      <HomeStack.Screen name="Data Gejala" component={SymptomsScreen} />
      <HomeStack.Screen name="Tambah Gejala" component={AddSymptomScreen} />
      <HomeStack.Screen name="Ubah Gejala" component={EditSymptomScreen} />

      <HomeStack.Screen name="Tingkat Kecanduan" component={LevelsScreen} />
      <HomeStack.Screen name="Tambah Tingkat" component={AddLevelScreen} />
      <HomeStack.Screen name="Ubah Tingkat" component={EditLevelScreen} />

      <HomeStack.Screen name="Tentang Aplikasi" component={AboutScreen} />
      <HomeStack.Screen name="Pengaturan" component={SettingsScreen} />
      <HomeStack.Screen name="Ubah Kata Sandi" component={EditPasswordScreen} />
    </HomeStack.Navigator>
  );
};
