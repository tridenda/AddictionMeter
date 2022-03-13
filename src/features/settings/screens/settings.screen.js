import React, { useContext, useState } from "react";
import { ScrollView } from "react-native";
import { Avatar, List } from "react-native-paper";
import styled from "styled-components";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { MainContainer } from "../../../components/utility/containers.styles";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { UsersContext } from "../../../services/users/users.context";

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
  const { onLogout } = useContext(AuthenticationContext);
  const { users } = useContext(UsersContext);

  const {
    fullName = "Nama Pengguna",
    intensity = "2 jam/hari",
    convertedStartIn = "1 Januari",
  } = users[0];

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
            <Text variant="title">{fullName}</Text>
            <Text>{intensity}</Text>
            <Text variant="caption">{`Bermain sejak ${convertedStartIn}`}</Text>
          </AvatarContainer>

          <ItemContainer>
            <List.Item
              title="Ubah Profil"
              left={(props) => (
                <List.Icon {...props} color="black" icon="account" />
              )}
              onPress={() => navigation.navigate("Ubah Profil")}
            />
            <List.Item
              title="Ubah Kata Sandi"
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
