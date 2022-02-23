import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { TouchableOpacity } from "react-native";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { CustomButton } from "../../../components/buttons/custom-button.component";
import { OptionButton } from "../components/option-button.component";
import {
  OptionContainer,
  QuestionContianer,
} from "../components/detection.styles";

const options = [
  ["A. Sangat Pasti", 1],
  ["B. Pasti", 0.9],
  ["C. Hampir Pasti", 0.8],
  ["D. Kemungkinan Besar", 0.7],
  ["E. Mungkin", 0.6],
  ["F. Tidak Tahu", 0.5],
  ["G. Mungkin Tidak", 0.4],
  ["H. Kemungkinan Besar Tidak", 0.3],
  ["I. Hampir Pasti Tidak", 0.2],
  ["J. Pasti Tidak", 0.1],
];

export const DetectionScreen = ({ navigation }) => {
  return (
    <SafeArea>
      <ScrollView>
        <QuestionContianer>
          <Text variant="title">Pertanyaan 1</Text>
          <Spacer position="top" size="sm" />
          <Text>
            Jika anda tidak sedang memainkan online game apakah anda
            menghabiskan berpikir tentang online game atau merencanakan
            berikutnya?
          </Text>
        </QuestionContianer>
        <OptionContainer>
          {options.map((elem, i) => {
            return (
              <TouchableOpacity
                key={`OptionButton-${i}`}
                onPress={() => navigation.navigate("Hasil")}
                value={elem[1]}
              >
                <OptionButton>{elem[0]}</OptionButton>
              </TouchableOpacity>
            );
          })}
        </OptionContainer>
        <Spacer position="top" size="lg" />
        <TouchableOpacity>
          <CustomButton title="KEMBALI" />
        </TouchableOpacity>
      </ScrollView>
    </SafeArea>
  );
};
