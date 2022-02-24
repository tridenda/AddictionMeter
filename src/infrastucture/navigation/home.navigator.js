import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { MenuScreen } from "../../features/menu/screens/menu.screen";
import { DetectionScreen } from "../../features/detection/screens/detection.screen";
import { ResultScreen } from "../../features/detection/screens/result.screen";
import { HistoryScreen } from "../../features/history/screens/history.screen";
import { DetailScreen } from "../../features/history/screens/detail.screen";
import { AboutScreen } from "../../features/about/screens/about.screen";
import { SymptomScreen } from "../../features/symptoms/screens/symptoms.screen";

const HomeStack = createStackNavigator();

export const HomeNavigator = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
      <HomeStack.Screen name="Beranda" component={MenuScreen} />

      <HomeStack.Screen name="Deteksi Kecanduan" component={DetectionScreen} />
      <HomeStack.Screen name="Hasil" component={ResultScreen} />

      <HomeStack.Screen name="Riwayat" component={HistoryScreen} />
      <HomeStack.Screen name="Detil Riwayat" component={DetailScreen} />

      <HomeStack.Screen name="Data Gejala" component={SymptomScreen} />
      <HomeStack.Screen name="Tambah Gejala" component={() => null} />
      <HomeStack.Screen name="Ubah Gejala" component={() => null} />

      <HomeStack.Screen name="Tingkat Kecanduan" component={() => null} />
      <HomeStack.Screen name="Tambah Tingkat" component={() => null} />
      <HomeStack.Screen name="Ubah Tingkat" component={() => null} />

      <HomeStack.Screen name="Tentang Aplikasi" component={AboutScreen} />
      <HomeStack.Screen name="Pengaturan" component={() => null} />
    </HomeStack.Navigator>
  );
};
