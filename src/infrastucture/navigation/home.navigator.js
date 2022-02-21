import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { MenuScreen } from "../../features/menu/screens/menu.screen";

const HomeStack = createStackNavigator();

export const HomeNavigator = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
      <HomeStack.Screen name="Beranda" component={MenuScreen} />

      <HomeStack.Screen name="Deteksi" component={() => null} />
      <HomeStack.Screen name="Hasil" component={() => null} />
      <HomeStack.Screen name="Riwayat" component={() => null} />

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
      <HomeStack.Screen name="Profil Pengguna" component={() => null} />
    </HomeStack.Navigator>
  );
};
