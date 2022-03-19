import React, { useState, useContext } from "react";
import styled from "styled-components";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { TextInput } from "react-native-paper";
import { useFocusEffect } from "@react-navigation/native";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { PrimaryButton } from "../../../components/buttons/primary-button.component";
import { Container } from "../../../components/utility/container.component";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const CustomKeyboardAvoidingView = styled(KeyboardAvoidingView).attrs({
  behavior: Platform.OS === "ios" ? "padding" : "",
})`
  flex: 1;
`;

export const EditPasswordScreen = ({ navigation }) => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [repeatedNewPassword, setRepeatedNewPassword] = useState("");

  const { onUpdatePassword, error, setError } = useContext(
    AuthenticationContext
  );

  useFocusEffect(
    React.useCallback(() => {
      setError([]);
    }, [])
  );

  return (
    <SafeArea>
      <CustomKeyboardAvoidingView>
        <Container>
          <ScrollView>
            <TextInput
              label="Kata Sandi Lama"
              mode="outlined"
              secureTextEntry
              autoCapitalize="none"
              secure
              value={currentPassword}
              onChangeText={(currentPassword) =>
                setCurrentPassword(currentPassword)
              }
            />

            <Spacer position="top" size="lg" />
            <TextInput
              label="Kata Sandi Baru"
              mode="outlined"
              secureTextEntry
              autoCapitalize="none"
              secure
              value={newPassword}
              onChangeText={(newPassword) => setNewPassword(newPassword)}
            />

            <Spacer position="top" size="lg" />
            <TextInput
              label="Konfirmasi Kata Sandi"
              mode="outlined"
              secureTextEntry
              autoCapitalize="none"
              secure
              value={repeatedNewPassword}
              onChangeText={(repeatedNewPassword) =>
                setRepeatedNewPassword(repeatedNewPassword)
              }
            />

            {error && (
              <Spacer position="top" size="lg">
                <Text variant="error">{error}</Text>
              </Spacer>
            )}

            <Spacer position="top" size="sm">
              <PrimaryButton
                onPress={() => {
                  onUpdatePassword(
                    currentPassword,
                    newPassword,
                    repeatedNewPassword,
                    navigation
                  );
                }}
              >
                Ubah
              </PrimaryButton>
            </Spacer>
          </ScrollView>
        </Container>
      </CustomKeyboardAvoidingView>
    </SafeArea>
  );
};
