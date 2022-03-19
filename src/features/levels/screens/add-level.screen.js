import React, { useState, useContext } from "react";
import { TextInput } from "react-native-paper";
import { ScrollView } from "react-native";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AvoidingView } from "../../../components/utility/avoiding-view.component";
import { PrimaryButton } from "../../../components/buttons/primary-button.component";
import { Container } from "../../../components/utility/container.component";
import {
  CFContainer,
  CFMaximumInput,
  CFMinimumInput,
} from "../components/levels.styles";

import { LevelsContext } from "../../../services/levels/levels.context";

export const AddLevelScreen = () => {
  const [code, setCode] = useState("");
  const [levelName, setLevelName] = useState("");
  const [cfMin, setCfMin] = useState("");
  const [cfMax, setCfMax] = useState("");
  const [description, setDescription] = useState("");
  const [solution, setSolution] = useState("");

  const { addLevel } = useContext(LevelsContext);

  return (
    <SafeArea>
      <AvoidingView>
        <Container>
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
              value={levelName}
              onChangeText={(levelName) => setLevelName(levelName)}
            />

            <Spacer position="top" size="lg" />
            <CFContainer>
              <CFMinimumInput
                label="Minimal CF"
                mode="outlined"
                keyboardType="numeric"
                value={cfMin}
                onChangeText={(cfMin) => setCfMin(cfMin)}
              />
              <CFMaximumInput
                label="Maksimal CF"
                mode="outlined"
                keyboardType="numeric"
                value={cfMax}
                onChangeText={(cfMax) => setCfMax(cfMax)}
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
              <PrimaryButton
                onPress={() => {
                  addLevel({
                    code,
                    levelName,
                    cfMin,
                    cfMax,
                    description,
                    solution,
                  });
                  setCode("");
                  setLevelName("");
                  setCfMin("");
                  setCfMax("");
                  setSolution("");
                }}
              >
                Tambah
              </PrimaryButton>
            </Spacer>
          </ScrollView>
        </Container>
      </AvoidingView>
    </SafeArea>
  );
};
