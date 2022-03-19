import styled from "styled-components";
import { TextInput } from "react-native-paper";

export const CFContainer = styled.View`
  flex-direction: row;
`;

export const CFMinimumInput = styled(TextInput)`
  flex: 1;
  margin-right: 5px;
`;

export const CFMaximumInput = styled(TextInput)`
  flex: 1;
  margin-left: 5px;
`;
