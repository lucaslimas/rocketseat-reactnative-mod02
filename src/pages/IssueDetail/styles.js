import styled from 'styled-components/native';
import { colors, metrics } from '~/styles';

export const Container = styled.View`
  flex: 1;
  padding: ${metrics.basePadding};
  background-color: ${colors.secundary};
`;

export const Header = styled.View`
  background-color: ${colors.primary};
`;

export const HeaderText = styled.Text`
  color: ${colors.black};
`;

export const Content = styled.View`
  padding: ${metrics.basePadding};
  flex: 1;
`;

export const SearchContent = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: ${colors.light};
  flex-direction: row;
`;

export const Input = styled.TextInput`
  border-radius: ${metrics.baseRadius};
  background-color: ${colors.white};
  height: 40px;
  margin-bottom: 10px;
  border: 1px solid ${colors.lighter};
  padding: 5px;
  flex: 1;
`;

export const Button = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text``;

export const Error = styled.Text`
  color: ${colors.danger};
  margin-bottom: ${metrics.baseMargin};
  align-self: center;
  font-size: 12px;
  font-weight: bold;
`;

export const Message = styled.Text`
  color: ${colors.dark};
  margin-top: ${metrics.baseMargin};
  text-align: center;
`;
