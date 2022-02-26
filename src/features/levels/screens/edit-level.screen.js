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

const CFContainer = styled.View`
  flex-direction: row;
`;

const CFMinimumInput = styled(TextInput)`
  flex: 1;
  margin-right: 5px;
`;

const CFMaximumInput = styled(TextInput)`
  flex: 1;
  margin-left: 5px;
`;

export const EditLevelScreen = () => {
  const [code, setCode] = useState("");
  const [level, setLevel] = useState("");
  const [CFMinimum, setCFMinimum] = useState("");
  const [CFMaximum, setCFMaximum] = useState("");
  const [description, setDescription] = useState("");
  const [solution, setSolution] = useState("");

  return (
    <SafeArea>
      <CustomKeyboardAvoidingView>
        <MainContainer>
          <ScrollView>
            <TextInput
              label="Kode"
              mode="outlined"
              value={code}
              onChangeText={(code) => setCode(code)}
            />

            <Spacer position="top" size="lg" />
            <TextInput
              label="Tingkat"
              mode="outlined"
              value={level}
              onChangeText={(level) => setLevel(level)}
            />

            <Spacer position="top" size="lg" />
            <CFContainer>
              <CFMinimumInput
                label="Minimal CF"
                mode="outlined"
                value={CFMinimum}
                onChangeText={(CFMinimum) => setCFMinimum(CFMinimum)}
              />
              <CFMaximumInput
                label="Maksimal CF"
                mode="outlined"
                value={CFMaximum}
                onChangeText={(CFMaximum) => setCFMaximum(CFMaximum)}
              />
            </CFContainer>

            <Spacer position="top" size="lg" />
            <TextInput
              label="Keterangan"
              mode="outlined"
              style={{ height: 150 }}
              multiline={true}
              value={description}
              onChangeText={(description) => setDescription(description)}
            />

            <Spacer position="top" size="lg" />
            <TextInput
              label="Solusi"
              mode="outlined"
              style={{ height: 150 }}
              multiline={true}
              value={solution}
              onChangeText={(solution) => setSolution(solution)}
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
