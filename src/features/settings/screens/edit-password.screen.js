import React, { useState, useContext } from "react";
import styled from "styled-components";
import { KeyboardAvoidingView, Platform } from "react-native";
import { TextInput } from "react-native-paper";
import { ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { MainContainer } from "../../../components/utility/containers.styles";
import { Spacer } from "../../../components/spacer/spacer.component";
import { CustomButton } from "../../../components/buttons/custom-button.component";
import { Text } from "../../../components/typography/text.component";

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

  const { onUpdatePassword, onLoading, error, setError } = useContext(
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
        <MainContainer>
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

            <Spacer position="top" size="lg">
              <TouchableOpacity
                onPress={() => {
                  onUpdatePassword(
                    currentPassword,
                    newPassword,
                    repeatedNewPassword,
                    navigation
                  );
                }}
              >
                <CustomButton title="Ubah" />
              </TouchableOpacity>
            </Spacer>
          </ScrollView>
        </MainContainer>
      </CustomKeyboardAvoidingView>
    </SafeArea>
  );
};
