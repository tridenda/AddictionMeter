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

export const EditAccountScreen = () => {
  const [name, setName] = useState("");
  const [intensity, setIntensity] = useState("");
  const [playingSince, setPlayingSince] = useState("");
  const [numberPhone, setNumberPhone] = useState("");

  return (
    <SafeArea>
      <CustomKeyboardAvoidingView>
        <MainContainer>
          <ScrollView>
            <TextInput
              label="Nama Lengkap"
              mode="outlined"
              value={name}
              onChangeText={(name) => setName(name)}
            />

            <Spacer position="top" size="lg" />
            <TextInput
              label="Intensitas Bermain"
              mode="outlined"
              value={intensity}
              onChangeText={(intensity) => setIntensity(intensity)}
            />

            <Spacer position="top" size="lg" />
            <TextInput
              label="Bermain sejak"
              mode="outlined"
              value={playingSince}
              onChangeText={(playingSince) => setPlayingSince(playingSince)}
            />

            <Spacer position="top" size="lg" />
            <TextInput
              label="Nomor HP"
              mode="outlined"
              value={numberPhone}
              onChangeText={(numberPhone) => setNumberPhone(numberPhone)}
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
