import styled from "styled-components";

export const MainContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const DetailContainer = styled.View`
  margin-top: ${(props) => props.theme.space[2]};
  padding: ${(props) => props.theme.space[3]};
`;

export const QuestionContainer = styled.View`
  background: ${(props) => props.theme.colors.bg.secondary};
  padding: ${(props) => props.theme.space[3]};
  margin-top: ${(props) => props.theme.space[3]};
`;

export const OptionContainer = styled.View`
  flex: 1;
  padding-left: ${(props) => props.theme.space[3]};
  padding-right: ${(props) => props.theme.space[3]};
`;

export const Highlight = styled.View`
  align-self: center;
  width: 80%;
  height: 150px;
  background-color: ${(props) => props.theme.colors.ui.quaternary};
  align-items: center;
  justify-content: center;
`;
