import React from "react";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { CustomButton } from "../../../components/buttons/custom-button.component";
import { Text } from "../../../components/typography/text.component";
import {
  DetailContainer,
  Highlight,
} from "../../../components/utility/containers.styles";
import { Spacer } from "../../../components/spacer/spacer.component";

export const DetailScreen = ({ navigation, route }) => {
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
        <TouchableOpacity onPress={() => navigation.navigate("Beranda")}>
          <CustomButton title="KEMBALI KE BERANDA" />
        </TouchableOpacity>
        <Spacer position="top" size="lg" />
      </ScrollView>
    </SafeArea>
  );
};
