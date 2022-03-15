import React, { useContext, useEffect, useRef } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { TouchableOpacity } from "react-native";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { CustomButton } from "../../../components/buttons/custom-button.component";
import { OptionButton } from "../components/option-button.component";
import {
  OptionContainer,
  QuestionContainer,
} from "../../../components/utility/containers.styles";

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
        <QuestionContainer>
          <Text variant="title">{`Pertanyaan ${questionOrder + 1}`}</Text>
          <Spacer position="top" size="sm" />
          <Text>{symptoms[questionOrder].question}</Text>
        </QuestionContainer>

        <OptionContainer>
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
        </OptionContainer>
        <Spacer position="top" size="lg" />

        {questionOrder > 0 ? (
          <>
            <TouchableOpacity onPress={() => onBack(navigation)}>
              <CustomButton title="KEMBALI" />
            </TouchableOpacity>
            <Spacer position="bottom" size="lg" />
          </>
        ) : null}
      </ScrollView>
    </SafeArea>
  );
};
