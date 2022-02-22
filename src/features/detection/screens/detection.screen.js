import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Text, TouchableOpacity } from "react-native";

import {
  Container,
  Title,
  Question,
  OptionButton,
  BackButton,
  QuestionContianer,
  ButtonText,
  OptionText,
} from "../components/detection.styles";
import { Spacer } from "../../../components/spacer/spacer.component";

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

export const DetectionScreen = () => {
  return (
    <ScrollView>
      <QuestionContianer>
        <Title>Pertanyaan 1</Title>
        <Question>
          Jika anda tidak sedang memainkan online game apakah anda menghabiskan
          berpikir tentang online game atau merencanakan berikutnya?
        </Question>
      </QuestionContianer>
      <Container>
        {options.map((elem, i) => {
          return (
            <TouchableOpacity key={`TouchableOpacity-${i}`}>
              <Spacer position="top" size="large">
                <OptionButton>
                  <OptionText>{elem[0]}</OptionText>
                </OptionButton>
              </Spacer>
            </TouchableOpacity>
          );
        })}
        <Spacer position="top" size="large">
          <TouchableOpacity>
            <BackButton>
              <ButtonText>Kembali</ButtonText>
            </BackButton>
          </TouchableOpacity>
        </Spacer>
      </Container>
    </ScrollView>
  );
};
