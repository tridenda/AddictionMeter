import { KeyboardAvoidingView, Platform } from "react-native";
import styled from "styled-components";

export const AvoidingView = styled(KeyboardAvoidingView).attrs({
  behavior: Platform.OS === "ios" ? "padding" : "",
})`
  flex: 1;
`;
