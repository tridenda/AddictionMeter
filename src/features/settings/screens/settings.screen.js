import React, { useContext, useState } from "react";
import { ScrollView } from "react-native";
import { Avatar, List } from "react-native-paper";
import styled from "styled-components";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { MainContainer } from "../../../components/utility/containers.styles";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const AvatarContainer = styled.View`
  flex: 1;
  height: 25%;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

const ItemContainer = styled(List.Section)`
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);

  return (
    <SafeArea>
      <ScrollView>
        <MainContainer>
          <AvatarContainer>
            <Avatar.Image
              size={150}
              backgroundColor="#c4c4c4"
              source={require("../../../../assets/ava.png")}
            />
            <Spacer position="top" size="lg" />
            <Text variant="title">{user.email}</Text>
          </AvatarContainer>

          <ItemContainer>
            <List.Item
              title="Ubah kata sandi"
              left={(props) => (
                <List.Icon {...props} color="black" icon="lastpass" />
              )}
              onPress={() => navigation.navigate("Ubah Kata Sandi")}
            />
            <List.Item
              title="Logout"
              left={(props) => (
                <List.Icon {...props} color="black" icon="door" />
              )}
              onPress={onLogout}
            />
          </ItemContainer>
        </MainContainer>
      </ScrollView>
    </SafeArea>
  );
};
