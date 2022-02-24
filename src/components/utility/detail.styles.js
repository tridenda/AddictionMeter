import styled from "styled-components";

export const DetailContainer = styled.View`
  margin-top: ${(props) => props.theme.space[2]};
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

export const Highlight = styled.View`
  align-self: center;
  width: 80%;
  height: 150px;
  background-color: ${(props) => props.theme.colors.ui.quaternary};
  align-items: center;
  justify-content: center;
`;
