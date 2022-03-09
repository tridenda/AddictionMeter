import React from "react";
import styled from "styled-components";

import { Text } from "../../../components/typography/text.component";

const Container = styled.View`
  width: 100%;
  height: 100px;
  border-width: 1px;
  border-radius: ${(props) => props.theme.sizes[1]};
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

const ContainerDate = styled.View`
  flex: 0.5;
  margin-top: 5px;
  margin-right: ${(props) => props.theme.sizes[1]};
  align-items: flex-end;
`;

const ContainerLevel = styled.View`
  flex: 1;
  align-items: center;
  margin-top: ${(props) => props.theme.sizes[1]};
`;

export const HistoryList = ({ result }) => {
  const { name, convertedDate } = result;

  return (
    <Container>
      <ContainerDate>
        <Text variant="caption">{convertedDate}</Text>
      </ContainerDate>
      <ContainerLevel>
        <Text variant="title">{name}</Text>
      </ContainerLevel>
    </Container>
  );
};
