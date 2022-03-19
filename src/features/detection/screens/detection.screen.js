import React, { useContext, useEffect, useRef } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { TouchableOpacity } from "react-native";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { OptionButton } from "../components/option-button.component";
import { PrimaryButton } from "../../../components/buttons/primary-button.component";
import { Container } from "../../../components/utility/container.component";

import { DetectionContext } from "../../../services/detection/detection.context";

export const DetectionScreen = ({ navigation }) => {
  const { options, symptoms, questionOrder, onSubmit, onBack } =
    useContext(DetectionContext);
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTo({ y: 0, animated: true });
    }
  }, [questionOrder]);

  return (
    <SafeArea>
      <ScrollView ref={ref}>
        <Spacer position="top" size="lg" />
        <Container variant="questioner">
          <Text variant="title">{`Pertanyaan ${questionOrder + 1}`}</Text>
          <Spacer position="top" size="sm" />
          <Text>{symptoms[questionOrder].question}</Text>
        </Container>

        <Container variant="option">
          {options.map((elem, i) => {
            return (
              <TouchableOpacity
                key={`OptionButton-${i}`}
                onPress={() => onSubmit(elem[1], navigation)}
              >
                <OptionButton>{elem[0]}</OptionButton>
              </TouchableOpacity>
            );
          })}
        </Container>
        <Spacer position="top" size="lg" />

        {questionOrder > 0 ? (
          <>
            <PrimaryButton onPress={() => onBack(navigation)}>
              Kembali
            </PrimaryButton>
            <Spacer position="bottom" size="lg" />
          </>
        ) : null}
      </ScrollView>
    </SafeArea>
  );
};
