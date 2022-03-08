import React, { useContext } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { MainContainer } from "../../../components/utility/containers.styles";
import { LevelList } from "../components/level-list.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { CustomButton } from "../../../components/buttons/custom-button.component";

import { LevelsContext } from "../../../services/levels/levels.context";

export const LevelsScreen = ({ navigation }) => {
  const { levels, getLevels, isLoading, error } = useContext(LevelsContext);

  useFocusEffect(
    React.useCallback(() => {
      getLevels();
    }, [])
  );

  return (
    <SafeArea>
      <ScrollView>
        <MainContainer>
          {levels.map((item, i) => {
            return (
              <Spacer position="top" size="lg" key={`LevelButton-${i}`}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Ubah Tingkat")}
                >
                  <LevelList level={item} />
                </TouchableOpacity>
              </Spacer>
            );
          })}
        </MainContainer>
        <TouchableOpacity onPress={() => navigation.navigate("Tambah Tingkat")}>
          <CustomButton title="Tambah Tingkat" />
        </TouchableOpacity>
        <Spacer position="top" size="lg" />
      </ScrollView>
    </SafeArea>
  );
};
