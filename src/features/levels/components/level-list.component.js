import React from "react";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";

const Container = styled.View`
  border-width: 1px;
  border-radius: ${(props) => props.theme.sizes[1]};
  padding: 10px;
  border-color: ${(props) => props.theme.colors.ui.secondary};
  flex-direction: row;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

const LevelContainer = styled.View`
  flex: 1;
  margin: 5px;
`;

const ButtonContainer = styled.View`
  margin: 5px;
  align-items: center;
  justify-content: center;
`;

export const LevelList = ({ levels }) => {
  const {
    code = "T01",
    level = "Ringan",
    CFMinimum = 0,
    CFMaximum = 0.39,
  } = levels;

  return (
    <Container>
      <LevelContainer>
        <Text variant="body">{code}</Text>
        <Text variant="title">{level}</Text>
        <Spacer position="top" size="sm" />
        <Text variant="caption">{`Nilai CF dari ${CFMinimum} s/d ${CFMaximum}`}</Text>
      </LevelContainer>
      <TouchableOpacity onPress={() => console.log("deleted")}>
        <ButtonContainer>
          <Ionicons name="trash" size={45} color="gray" />
        </ButtonContainer>
      </TouchableOpacity>
    </Container>
  );
};
