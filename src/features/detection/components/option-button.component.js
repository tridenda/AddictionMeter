import React from "react";

import styled from "styled-components";

import { Text } from "../../../components/typography/text.component";

const Container = styled.View`
  width: 100%;
  height: 50px;
  background-color: ${(props) => props.theme.colors.bg.tertiary};
  border-radius: 10px;
  border-width: 1px;
  border-color: #808080;
  justify-content: center;
  padding-left: 22px;
  margin-top: ${(props) => props.theme.sizes[1]};
`;

export const OptionButton = ({ children }) => {
  return (
    <>
      <Container>
        <Text variant="body">{children}</Text>
      </Container>
    </>
  );
};
