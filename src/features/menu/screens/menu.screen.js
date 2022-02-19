import React from "react";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styled from "styled-components";

const ContainerMenu = styled.View`
  flex: 1;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const ButtonMenu = styled.View`
  width: 150px;
  height: 150px;
  background-color: red;
  margin: 5px;
  align-items: center;
  justify-content: center;
`;

const TitleMenu = styled.Text``;

export const MenuScreen = () => {
  return (
    <ScrollView>
      <ContainerMenu>
        <ButtonMenu>
          <TitleMenu>Deteksi Kecanduan</TitleMenu>
        </ButtonMenu>
        <ButtonMenu>
          <TitleMenu>Riwayat Kecanduan</TitleMenu>
        </ButtonMenu>
        <ButtonMenu>
          <TitleMenu>Data Gejala</TitleMenu>
        </ButtonMenu>
        <ButtonMenu>
          <TitleMenu>Data Kecanduan</TitleMenu>
        </ButtonMenu>
        <ButtonMenu>
          <TitleMenu>Tingkat Kecanduan</TitleMenu>
        </ButtonMenu>
        <ButtonMenu>
          <TitleMenu>Data Aturan</TitleMenu>
        </ButtonMenu>
        <ButtonMenu>
          <TitleMenu>Tentang Aplikasi</TitleMenu>
        </ButtonMenu>
        <ButtonMenu>
          <TitleMenu>Profil Pengguna</TitleMenu>
        </ButtonMenu>
        <ButtonMenu>
          <TitleMenu>Keluar</TitleMenu>
        </ButtonMenu>
      </ContainerMenu>
    </ScrollView>
  );
};
