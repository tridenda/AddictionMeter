import React from "react";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";

const ContainerMenu = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 8px;
`;

const ButtonMenu = styled(TouchableOpacity)`
  height: 150px;
  width: 44%;
  align-items: center;
  justify-content: center;
  border-radius: ${(props) => props.theme.sizes[1]};
  border-width: 1px;
  border-color: gray;
  margin: ${(props) => props.theme.space[2]};
`;

const TitleMenu = styled.Text`
  flex-wrap: wrap;
  font-size: 20px;
  margin: 10px;
  text-align: center;
`;

export const MenuScreen = () => {
  return (
    <ScrollView>
      <ContainerMenu>
        <ButtonMenu>
          <Ionicons name="finger-print" size={50} color="gray" />
          <TitleMenu>Deteksi Kecanduan</TitleMenu>
        </ButtonMenu>
        <ButtonMenu>
          <Ionicons name="calendar" size={50} color="gray" />
          <TitleMenu>Riwayat Kecanduan</TitleMenu>
        </ButtonMenu>
        <ButtonMenu>
          <Ionicons name="albums" size={50} color="gray" />
          <TitleMenu>Data Gejala</TitleMenu>
        </ButtonMenu>
        <ButtonMenu>
          <Ionicons name="folder" size={50} color="gray" />
          <TitleMenu>Data Kecanduan</TitleMenu>
        </ButtonMenu>
        <ButtonMenu>
          <Ionicons name="analytics" size={50} color="gray" />
          <TitleMenu>Tingkat Kecanduan</TitleMenu>
        </ButtonMenu>
        <ButtonMenu>
          <Ionicons name="folder-open" size={50} color="gray" />
          <TitleMenu>Data Aturan</TitleMenu>
        </ButtonMenu>
        <ButtonMenu>
          <Ionicons name="alert-circle" size={50} color="gray" />
          <TitleMenu>Tentang Aplikasi</TitleMenu>
        </ButtonMenu>
        <ButtonMenu>
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
