import styled from "styled-components";

export const QuestionContianer = styled.View`
  background: ${(props) => props.theme.colors.bg.secondary};
  padding: ${(props) => props.theme.space[3]};
  margin-top: ${(props) => props.theme.space[3]};
`;

export const OptionContainer = styled.View`
  flex: 1;
  padding-left: ${(props) => props.theme.space[3]};
  padding-right: ${(props) => props.theme.space[3]};
`;
