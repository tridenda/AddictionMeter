import styled from "styled-components";
import { TextInput } from "react-native-paper";

export const FormContainer = styled.View`
  flex-direction: row;
`;

export const MBInput = styled(TextInput)`
  flex: 1;
  margin-right: 5px;
`;

export const MDInput = styled(TextInput)`
  flex: 1;
  margin-left: 5px;
`;
