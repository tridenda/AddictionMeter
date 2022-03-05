import React, { useState } from "react";
import styled from "styled-components";
import { KeyboardAvoidingView, Platform } from "react-native";
import { TextInput } from "react-native-paper";
import { ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { MainContainer } from "../../../components/utility/containers.styles";
import { Spacer } from "../../../components/spacer/spacer.component";
import { CustomButton } from "../../../components/buttons/custom-button.component";

const CustomKeyboardAvoidingView = styled(KeyboardAvoidingView).attrs({
  behavior: Platform.OS === "ios" ? "padding" : "",
})`
  flex: 1;
`;

export const EditPasswordScreen = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirmation, setNewPasswordConfirmation] = useState("");

  return (
    <SafeArea>
      <CustomKeyboardAvoidingView>
        <MainContainer>
          <ScrollView>
            <TextInput
              label="Kata Sandi Lama"
              mode="outlined"
              value={oldPassword}
              onChangeText={(oldPassword) => setOldPassword(oldPassword)}
            />

            <Spacer position="top" size="lg" />
            <TextInput
              label="Kata Sandi Baru"
              mode="outlined"
              value={newPassword}
              onChangeText={(newPassword) => setNewPassword(newPassword)}
            />

            <Spacer position="top" size="lg" />
            <TextInput
              label="Konfirmasi Kata Sandi"
              mode="outlined"
              value={newPasswordConfirmation}
              onChangeText={(newPasswordConfirmation) =>
                setNewPasswordConfirmation(newPasswordConfirmation)
              }
            />

            <Spacer position="top" size="lg">
              <TouchableOpacity>
                <CustomButton title="Ubah" />
              </TouchableOpacity>
            </Spacer>
          </ScrollView>
        </MainContainer>
      </CustomKeyboardAvoidingView>
    </SafeArea>
  );
};
