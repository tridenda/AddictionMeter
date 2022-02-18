import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const HomeStack = createStackNavigator();

export const HomeNavigator = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
      <HomeStack.Screen name="Beranda" component={() => null} />

      <HomeStack.Screen name="Deteksi" component={() => null} />
      <HomeStack.Screen name="Hasil" component={() => null} />
      <HomeStack.Screen name="Riwayat" component={() => null} />

      <HomeStack.Screen name="Data Gejala" component={() => null} />
      <HomeStack.Screen name="Tambah Gejala" component={() => null} />
      <HomeStack.Screen name="Ubah Gejala" component={() => null} />

      <HomeStack.Screen name="Data Kecanduan" component={() => null} />
      <HomeStack.Screen name="Ubah Kecanduan" component={() => null} />

      <HomeStack.Screen name="Data Tingkat Kecanduan" component={() => null} />
      <HomeStack.Screen
        name="Tambah Tingkat Kecanduan "
        component={() => null}
      />
      <HomeStack.Screen name="Ubah Tingkat Kecanduan" component={() => null} />

      <HomeStack.Screen name="Data Aturan" component={() => null} />
      <HomeStack.Screen name="Ubah Aturan" component={() => null} />

      <HomeStack.Screen name="Tentang" component={() => null} />
      <HomeStack.Screen name="Profil" component={() => null} />
    </HomeStack.Navigator>
  );
};
