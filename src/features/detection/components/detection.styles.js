import styled from "styled-components";

export const QuestionContianer = styled.View`
  background: white;
  padding: ${(props) => props.theme.space[3]};
  margin-top: ${(props) => props.theme.space[4]};
`;

export const OptionContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

export const NavigationContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;
