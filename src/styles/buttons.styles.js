import styled from "styled-components";
import { Button } from "react-native-paper";

export const PrimaryButton = styled(Button).attrs({
  uppercase: false,
  contentStyle: {
    height: 45,
  },
  labelStyle: {
    // theme.fontSizes.body
    fontSize: 18,
    // theme.colors.text.primary
    color: "#252b31",
    // theme.fonts.heading
    fontFamily: "Caladea_700Bold",
  },
})`
  background-color: ${(props) => props.theme.colors.bg.tertiary};
  border-radius: 10px;
  border-width: 1px;
  border-color: ${(props) => props.theme.colors.ui.tertiary};
  align-self: center;
`;
