import styled from "styled-components";

import { Text } from "../typography/text.component";

const Container = styled.View`
  width: 150px;
  height: 50px;
  background-color: ${(props) => props.theme.colors.bg.tertiary};
  border-radius: 15px;
  border-width: 1px;
  border-color: ${(props) => props.theme.colors.ui.tertiary};
  justify-content: center;
  align-items: center;
  align-self: center;
`;

const ButtonText = styled(Text).attrs({
  variant: "button",
})`
  text-align: center;
  justify-content: center;
`;

export const CustomButton = ({ title }) => {
  return (
    <Container>
      <ButtonText variant="button">{title}</ButtonText>
    </Container>
  );
};
