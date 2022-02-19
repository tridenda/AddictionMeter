import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
