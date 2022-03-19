import React, { useContext } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { MainContainer } from "../../../styles/containers.styles";
import { SymptomList } from "../components/symptom-list.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { PrimaryButton } from "../../../styles/buttons.styles";

import { SymptomsContext } from "../../../services/symptoms/symptoms.context";

export const SymptomsScreen = ({ navigation }) => {
  const { symptoms, getSymptoms } = useContext(SymptomsContext);

  useFocusEffect(
    React.useCallback(() => {
      getSymptoms();
    }, [])
  );

  return (
    <SafeArea>
      <ScrollView>
        <MainContainer>
          {symptoms.map((item, i) => {
            return (
              <Spacer position="top" size="lg" key={`SymptomButton-${i}`}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Ubah Gejala", {
                      symptom: item,
                    })
                  }
                >
                  <SymptomList symptom={item} />
                </TouchableOpacity>
              </Spacer>
            );
          })}
        </MainContainer>
        <PrimaryButton onPress={() => navigation.navigate("Tambah Gejala")}>
          Tambah
        </PrimaryButton>
        <Spacer position="top" size="lg" />
      </ScrollView>
    </SafeArea>
  );
};
