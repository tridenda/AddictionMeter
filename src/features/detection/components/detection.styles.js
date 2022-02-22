import styled from "styled-components";

export const Container = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

export const QuestionContianer = styled.View`
  background: white;
  padding: ${(props) => props.theme.space[3]};
  margin-top: ${(props) => props.theme.space[4]};
`;

export const OptionButton = styled.View`
  width: 100%;
  height: 50px;
  background-color: ${(props) => props.theme.colors.bg.tertiary};
  border-radius: 10px;
  border-width: 1px;
  border-color: #808080;
  justify-content: center;
  padding-left: 22px;
`;

export const BackButton = styled.View`
  width: 150px;
  height: 45px;
  background-color: ${(props) => props.theme.colors.bg.secondary};
  border-radius: 15px;
  border-width: 1px;
  border-color: #fff;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.text.primary};
  font-weight: bold;
  font-size: ${(props) => props.theme.fontSizes.title};
`;

export const Question = styled.Text`
  margin-top: ${(props) => props.theme.space[2]};
  color: ${(props) => props.theme.colors.text.secondary};
  line-height: 28px;
  font-size: ${(props) => props.theme.fontSizes.body};
`;

export const OptionText = styled.Text`
  color: ${(props) => props.theme.colors.text.primary};
  font-size: ${(props) => props.theme.fontSizes.body};
`;

export const ButtonText = styled.Text`
  color: ${(props) => props.theme.colors.text.primary};
  font-weight: bold;
  text-transform: uppercase;
  font-size: ${(props) => props.theme.fontSizes.button};
`;
