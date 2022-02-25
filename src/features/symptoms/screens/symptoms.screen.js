import React from "react";
import { ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { MainContainer } from "../../../components/utility/containers.styles";
import { SymptomList } from "../components/symptom-list.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { CustomButton } from "../../../components/buttons/custom-button.component";

const data = [
  {
    code: "G01",
    symptom: "Sibuk bermain game di internet",
  },
  {
    code: "G02",
    symptom: "Mudah tersinggung, cemas, sedih ",
  },
  {
    code: "G03",
    symptom: "Waktu bermain bertambah",
  },
  {
    code: "G04",
    symptom: "Sulit mengontrol untuk berhenti bermain game",
  },
  {
    code: "G05",
    symptom: "Kehilangan gairah melakukan aktivitas lain",
  },
  {
    code: "G06",
    symptom: "Meskipun tahu dampak buruk namun tidak dihiraukan ",
  },
  {
    code: "G07",
    symptom: "Berbohong terkait jumlah bermain",
  },
  {
    code: "G08",
    symptom: "Bermain game sebagai pengalihan emosi negatif",
  },
  {
    code: "G09",
    symptom: "Kehilangan hal penting seperti karir, pendidikan ataupun lainnya",
  },
];

export const SymptomScreen = ({ navigation }) => {
  return (
    <SafeArea>
      <ScrollView>
        <MainContainer>
          {data.map((item, i) => {
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
