import styled from "styled-components";

import { Text } from "../typography/text.component";

const Container = styled.View`
  width: 150px;
  height: 45px;
  background-color: ${(props) => props.theme.colors.bg.tertiary};
  border-radius: 15px;
  border-width: 1px;
  border-color: ${(props) => props.theme.colors.ui.tertiary};
  justify-content: center;
  align-items: center;
  align-self: center;
`;

export const CustomButton = ({ title }) => {
  return (
    <Container>
      <Text variant="button">{title}</Text>
    </Container>
  );
};
