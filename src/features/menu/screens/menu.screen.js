import React from "react";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import styled from "styled-components";

import { SafeArea } from "../../../components/utility/safe-area.component";

const ContainerMenu = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
`;

const ButtonMenu = styled.View`
  background-color: red;
  margin: 5px;
  width: 45%;
  height: 100%;
`;

const TitleMenu = styled.Text``;

export const MenuScreen = () => {
  return (
    <SafeArea>
      <ScrollView>
        <ContainerMenu>
          <ButtonMenu>
            <TitleMenu>1</TitleMenu>
          </ButtonMenu>
          <ButtonMenu>
            <TitleMenu>2</TitleMenu>
          </ButtonMenu>
          <ButtonMenu>
            <TitleMenu>3</TitleMenu>
          </ButtonMenu>
          <ButtonMenu>
            <TitleMenu>4</TitleMenu>
          </ButtonMenu>
          <ButtonMenu>
            <TitleMenu>5</TitleMenu>
          </ButtonMenu>
          <ButtonMenu>
            <TitleMenu>5</TitleMenu>
          </ButtonMenu>
          <ButtonMenu>
            <TitleMenu>5</TitleMenu>
          </ButtonMenu>
          <ButtonMenu>
            <TitleMenu>5</TitleMenu>
          </ButtonMenu>
          <ButtonMenu>
            <TitleMenu>5</TitleMenu>
          </ButtonMenu>
        </ContainerMenu>
      </ScrollView>
    </SafeArea>
  );
};
