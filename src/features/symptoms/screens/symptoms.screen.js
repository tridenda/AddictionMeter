import React, { useContext } from "react";
import { ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { MainContainer } from "../../../components/utility/containers.styles";
import { SymptomList } from "../components/symptom-list.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { CustomButton } from "../../../components/buttons/custom-button.component";

import { SymptomsContext } from "../../../services/symptoms/symptoms.context";

export const SymptomsScreen = ({ navigation }) => {
  const { symptoms, isLoading, error } = useContext(SymptomsContext);

  return (
    <SafeArea>
      <ScrollView>
        <MainContainer>
          {symptoms.map((item, i) => {
            return (
              <Spacer position="top" size="lg" key={`SymptomButton-${i}`}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Ubah Gejala")}
                >
                  <SymptomList symptoms={item} />
                </TouchableOpacity>
              </Spacer>
            );
          })}
        </MainContainer>
        <TouchableOpacity onPress={() => navigation.navigate("Tambah Gejala")}>
          <CustomButton title="Tambah Gejala" />
        </TouchableOpacity>
        <Spacer position="top" size="lg" />
      </ScrollView>
    </SafeArea>
  );
};
