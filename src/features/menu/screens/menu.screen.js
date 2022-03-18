import React, { useContext } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";

import { SafeArea } from "../../../components/utility/safe-area.component";
import {
  ContainerMenu,
  ButtonMenu,
  TitleMenu,
} from "../components/menu.styles";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const MenuScreen = ({ navigation }) => {
  const { onLogout, onGetUser, userInfo } = useContext(AuthenticationContext);

  useFocusEffect(
    React.useCallback(() => {
      onGetUser();
    }, [])
  );

  if (!userInfo) {
    return null;
  }

  return (
    <SafeArea>
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
          {userInfo.userLevel == "admin" ? (
            <>
              <ButtonMenu onPress={() => navigation.navigate("Data Gejala")}>
                <Ionicons name="albums" size={50} color="gray" />
                <TitleMenu>Data Gejala</TitleMenu>
              </ButtonMenu>
              <ButtonMenu
                onPress={() => navigation.navigate("Tingkat Kecanduan")}
              >
                <Ionicons name="analytics" size={50} color="gray" />
                <TitleMenu>Tingkat Kecanduan</TitleMenu>
              </ButtonMenu>
            </>
          ) : null}
          <ButtonMenu onPress={() => navigation.navigate("Tentang Aplikasi")}>
            <Ionicons name="alert-circle" size={50} color="gray" />
            <TitleMenu>Tentang</TitleMenu>
          </ButtonMenu>
          <ButtonMenu onPress={() => navigation.navigate("Pengaturan")}>
            <Ionicons name="settings" size={50} color="gray" />
            <TitleMenu>Pengaturan</TitleMenu>
          </ButtonMenu>
          <ButtonMenu onPress={onLogout}>
            <Ionicons name="log-out" size={50} color="gray" />
            <TitleMenu>Keluar</TitleMenu>
          </ButtonMenu>
        </ContainerMenu>
      </ScrollView>
    </SafeArea>
  );
};
