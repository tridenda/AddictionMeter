import React from "react";
import { ScrollView } from "react-native";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { Text } from "../../../components/typography/text.component";
import { DetailContainer, Highlight } from "../../../styles/containers.styles";
import { Spacer } from "../../../components/spacer/spacer.component";
import { PrimaryButton } from "../../../styles/buttons.styles";

export const ResultScreen = ({ navigation, route }) => {
  const { result } = route.params;
  // split the solution text for creating a new paragraph
  const solution = result.solution.split(`\\n`);

  return (
    <SafeArea>
      <ScrollView>
        <DetailContainer>
          <Text>
            Berdasarkan pertanyaan serta jawaban yang kamu jawab. Kemungkinan
            tingkat kecanduan kamu terhadap online game yaitu.
          </Text>
          <Spacer position="top" size="lg">
            <Highlight>
              <Text variant="highlight">{result.levelName}</Text>
            </Highlight>
          </Spacer>

          <Spacer position="top" size="lg" />
          <Text variant="title">Saran:</Text>
          {solution.map((item, i) => {
            return (
              <Spacer key={`solution-${i}`} position="top" size="sm">
                <Text>{item}</Text>
              </Spacer>
            );
          })}
        </DetailContainer>
        <Spacer position="top" size="lg" />
        <PrimaryButton onPress={() => navigation.navigate("Beranda")}>
          Kembali Ke Beranda
        </PrimaryButton>
        <Spacer position="top" size="lg" />
      </ScrollView>
    </SafeArea>
  );
};
