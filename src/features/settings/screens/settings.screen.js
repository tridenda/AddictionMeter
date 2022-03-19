import React, { useContext } from "react";
import { ScrollView } from "react-native";
import { Avatar, List } from "react-native-paper";
import styled from "styled-components";
import { useFocusEffect } from "@react-navigation/native";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { MainContainer } from "../../../styles/containers.styles";
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
        <MainContainer>
          <AvatarContainer>
            <Avatar.Image
              size={150}
              backgroundColor="#c4c4c4"
              source={require("../../../../assets/ava.png")}
            />
            <Spacer position="top" size="lg" />
            <Text variant="title">{userInfo.fullName}</Text>
            <Text variant="caption">{userInfo.email}</Text>
            <Text>{`Intensitas bermain ${userInfo.intensity} Jam/Hari`}</Text>
            <Text>{`Rutin bermain sejak ${userInfo.startIn}`}</Text>
          </AvatarContainer>

          <ItemContainer>
            <List.Item
              title="Ubah profil"
              left={(props) => (
                <List.Icon {...props} color="black" icon="account" />
              )}
              onPress={() => navigation.navigate("Ubah Profil", { userInfo })}
            />
            <List.Item
              title="Ubah kata sandi"
              left={(props) => (
                <List.Icon {...props} color="black" icon="shield-key" />
              )}
              onPress={() => navigation.navigate("Ubah Kata Sandi")}
            />
            <List.Item
              title="Logout"
              left={(props) => (
                <List.Icon {...props} color="black" icon="logout" />
              )}
              onPress={onLogout}
            />
          </ItemContainer>
        </MainContainer>
      </ScrollView>
    </SafeArea>
  );
};
