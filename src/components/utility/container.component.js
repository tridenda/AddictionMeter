import styled from "styled-components/native";

const defaultContainerStyles = (theme) => `

`;

const main = (theme) => `
    padding: ${theme.space[3]};
`;

const questioner = (theme) => `
    background: ${theme.colors.bg.secondary};
    padding: ${theme.space[3]};
`;

const option = (theme) => `
    flex: 1;
    padding-left: ${theme.space[3]};
    padding-right: ${theme.space[3]};
`;
const highlight = (theme) => `
  align-self: center;
  width: 80%;
  height: 150px;
  background-color: ${theme.colors.ui.quaternary};
  align-items: center;
  justify-content: center;
`;

const variants = {
  main,
  questioner,
  option,
  highlight,
};

export const Container = styled.View`
  ${({ theme }) => defaultContainerStyles(theme)}
  ${({ variant, theme }) => variants[variant](theme)}
`;

Container.defaultProps = {
  variant: "main",
};
