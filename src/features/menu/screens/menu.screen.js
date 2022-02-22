import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

import {
  ContainerMenu,
  ButtonMenu,
  TitleMenu,
} from "../components/menu.styles";

export const MenuScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <ContainerMenu>
        <ButtonMenu onPress={() => navigation.navigate("Deteksi Kecanduan")}>
          <Ionicons name="finger-print" size={50} color="gray" />
          <TitleMenu>Deteksi Kecanduan</TitleMenu>
        </ButtonMenu>
        <ButtonMenu onPress={() => navigation.navigate("Riwayat")}>
          <Ionicons name="calendar" size={50} color="gray" />
          <TitleMenu>Riwayat Kecanduan</TitleMenu>
        </ButtonMenu>

        <ButtonMenu onPress={() => navigation.navigate("Data Gejala")}>
          <Ionicons name="albums" size={50} color="gray" />
          <TitleMenu>Data Gejala</TitleMenu>
        </ButtonMenu>
        <ButtonMenu onPress={() => navigation.navigate("Tingkat Kecanduan")}>
          <Ionicons name="analytics" size={50} color="gray" />
          <TitleMenu>Tingkat Kecanduan</TitleMenu>
        </ButtonMenu>

        <ButtonMenu onPress={() => navigation.navigate("Tentang Aplikasi")}>
          <Ionicons name="alert-circle" size={50} color="gray" />
          <TitleMenu>Tentang</TitleMenu>
        </ButtonMenu>
        <ButtonMenu onPress={() => navigation.navigate("Profil Pengguna")}>
          <Ionicons name="person" size={50} color="gray" />
          <TitleMenu>Profil Pengguna</TitleMenu>
        </ButtonMenu>
        <ButtonMenu>
          <Ionicons name="log-out" size={50} color="gray" />
          <TitleMenu>Keluar</TitleMenu>
        </ButtonMenu>
      </ContainerMenu>
    </ScrollView>
  );
};
