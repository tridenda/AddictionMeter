import React from "react";
import { ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { MainContainer } from "../../../components/utility/containers.styles";
import { LevelList } from "../components/level-list.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { CustomButton } from "../../../components/buttons/custom-button.component";

const data = [
  {
    code: "T01",
    level: "Ringan",
    CFMinimum: 0,
    CFMaximum: 0.39,
  },
  {
    code: "T02",
    level: "Sedang",
    CFMinimum: 0.4,
    CFMaximum: 0.79,
  },
  {
    code: "T03",
    level: "Berat",
    CFMinimum: 0.8,
    CFMaximum: 1,
  },
];

export const LevelsScreen = ({ navigation }) => {
  return (
    <SafeArea>
      <ScrollView>
        <MainContainer>
          {data.map((item, i) => {
            return (
              <Spacer position="top" size="lg" key={`LevelButton-${i}`}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Ubah Tingkat")}
                >
                  <LevelList levels={item} />
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
