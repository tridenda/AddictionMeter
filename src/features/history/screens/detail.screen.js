import React from "react";
import { ScrollView } from "react-native";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { PrimaryButton } from "../../../components/buttons/primary-button.component";
import { Container } from "../../../components/utility/container.component";

export const DetailScreen = ({ navigation, route }) => {
  const { result } = route.params;
  // split the solution text for creating a new paragraph
  const solution = result.solution.split(`\\n`);

  return (
    <SafeArea>
      <ScrollView>
        <Container>
          <Text>
            Berdasarkan pertanyaan serta jawaban yang kamu jawab. Kemungkinan
            tingkat kecanduan kamu terhadap online game yaitu.
          </Text>
          <Spacer position="top" size="lg">
            <Container variant="highlight">
              <Text variant="highlight">{result.levelName}</Text>
              <Text variant="body">Nilai Kepastian: {result.cfValue}</Text>
            </Container>
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
        </Container>
        <Spacer position="top" size="lg" />
        <PrimaryButton onPress={() => navigation.navigate("Beranda")}>
          Kembali Ke Beranda
        </PrimaryButton>
        <Spacer position="top" size="lg" />
      </ScrollView>
    </SafeArea>
  );
};
