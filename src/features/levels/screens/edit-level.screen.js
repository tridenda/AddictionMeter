import React, { useState, useContext } from "react";
import styled from "styled-components";
import { TextInput } from "react-native-paper";
import { ScrollView } from "react-native";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { MainContainer } from "../../../components/utility/containers.styles";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AvoidingView } from "../../../components/utility/avoiding-view.component";
import { PrimaryButton } from "../../../styles/buttons.styles";

import { LevelsContext } from "../../../services/levels/levels.context";

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

export const EditLevelScreen = ({ navigation, route }) => {
  // retrieve data level from the previous page
  const { level } = route.params;

  const [code, setCode] = useState(level.code);
  const [levelName, setLevelName] = useState(level.levelName);
  const [cfMin, setCfMin] = useState(level.cfMin.toString());
  const [cfMax, setCfMax] = useState(level.cfMax.toString());
  const [description, setDescription] = useState(level.description);
  const [solution, setSolution] = useState(level.solution);

  const { updateLevel, isLoading, error } = useContext(LevelsContext);

  return (
    <SafeArea>
      <AvoidingView>
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
                  updateLevel({
                    levelId: level.levelId,
                    code,
                    levelName,
                    cfMin,
                    cfMax,
                    description,
                    solution,
                  });
                  navigation.navigate("Tingkat Kecanduan");
                }}
              >
                Ubah
              </PrimaryButton>
            </Spacer>
          </ScrollView>
        </MainContainer>
      </AvoidingView>
    </SafeArea>
  );
};
