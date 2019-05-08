import styled from 'styled-components/native';
import { colors, metrics } from '~/styles';

export const Container = styled.TouchableOpacity`
  background-color: ${colors.white};
  border-radius: ${metrics.baseRadius};
  margin-top: 10px;
  padding: ${metrics.basePadding};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const Image = styled.Image`
  width: 48px;
  height: 48px;
  margin-right: 10px;
  border-radius: 50;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  margin-right: 10px;
`;

export const ContentCenter = styled.View`
  justify-content: center;
`;
export const ContentHeader = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${colors.black};
`;

export const ContentDescription = styled.Text`
  font-size: 12px;
  color: ${colors.regular};
`;

export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text``;
