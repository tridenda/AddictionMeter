import React from "react";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

import { Text } from "../../../components/typography/text.component";

const Container = styled.View`
  border-width: 1px;
  border-radius: ${(props) => props.theme.sizes[1]};
  padding: 10px;
  border-color: ${(props) => props.theme.colors.ui.secondary};
  flex-direction: row;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

const SymptomContainer = styled.View`
  flex: 1;
  margin: 5px;
`;

const ButtonContainer = styled.View`
  margin: 5px;
  align-items: center;
  justify-content: center;
`;

export const SymptomList = ({ symptoms }) => {
  const { code = "G01", symptomName = "Sibuk bermain internet" } = symptoms;

  return (
    <Container>
      <SymptomContainer>
        <Text variant="body">{symptomName}</Text>
      </SymptomContainer>
      <TouchableOpacity onPress={() => console.log("deleted")}>
        <ButtonContainer>
          <Ionicons name="trash" size={45} color="gray" />
        </ButtonContainer>
      </TouchableOpacity>
    </Container>
  );
};
