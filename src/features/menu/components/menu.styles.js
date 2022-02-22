import styled from "styled-components";
import { TouchableOpacity } from "react-native";

export const ContainerMenu = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: ${(props) => props.theme.space[2]};
`;

export const ButtonMenu = styled(TouchableOpacity)`
  height: 150px;
  width: 44%;
  align-items: center;
  justify-content: center;
  border-radius: ${(props) => props.theme.sizes[1]};
  border-width: 1px;
  border-color: gray;
  margin: ${(props) => props.theme.space[2]};
`;

export const TitleMenu = styled.Text`
  flex-wrap: wrap;
  font-size: ${(props) => props.theme.fontSizes.title};
  margin: ${(props) => props.theme.space[2]};
  text-align: center;
`;
