import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { MenuScreen } from "../../features/menu/screens/menu.screen";
import { DetectionScreen } from "../../features/detection/screens/detection.screen";
import { ResultScreen } from "../../features/detection/screens/result.screen";
import { HistoryScreen } from "../../features/history/screens/history.screen";

const HomeStack = createStackNavigator();

export const HomeNavigator = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
      <HomeStack.Screen name="Beranda" component={MenuScreen} />

      <HomeStack.Screen name="Deteksi Kecanduan" component={DetectionScreen} />
      <HomeStack.Screen name="Hasil" component={ResultScreen} />
      <HomeStack.Screen name="Riwayat" component={HistoryScreen} />

      <HomeStack.Screen name="Data Gejala" component={() => null} />
      <HomeStack.Screen name="Tambah Gejala" component={() => null} />
      <HomeStack.Screen name="Ubah Gejala" component={() => null} />

      <HomeStack.Screen name="Data Kecanduan" component={() => null} />
      <HomeStack.Screen name="Ubah Kecanduan" component={() => null} />

      <HomeStack.Screen name="Tingkat Kecanduan" component={() => null} />
      <HomeStack.Screen
        name="Tambah Tingkat Kecanduan"
        component={() => null}
      />
      <HomeStack.Screen name="Ubah Tingkat Kecanduan" component={() => null} />

      <HomeStack.Screen name="Data Aturan" component={() => null} />
      <HomeStack.Screen name="Ubah Aturan" component={() => null} />

      <HomeStack.Screen name="Tentang Aplikasi" component={() => null} />
      <HomeStack.Screen name="Pengaturan" component={() => null} />
    </HomeStack.Navigator>
  );
};
