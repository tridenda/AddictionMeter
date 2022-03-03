import styled from "styled-components";
import { TextInput } from "react-native-paper";

import { Text } from "../../../components/typography/text.component";

export const AccountBackground = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

export const NotesContainer = styled.View`
  flex-direction: row;
  text-align: center;
`;

export const TitleText = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.h4};
`;

export const DescriptionText = styled(Text)`
  text-align: center;
`;

export const CustomTextInput = styled(TextInput)`
  width: 270px;
`;

export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;
