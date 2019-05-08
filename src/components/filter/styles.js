import styled from 'styled-components/native';
import { colors, metrics } from '~/styles';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-around;
  background-color: ${colors.light};
  padding: 5px;
  border-radius: ${metrics.baseRadius};
`;

export const ButtonText = styled.Text`
  font-size: 12px;
  color: ${colors.regular};
`;

export const ButtonTextSelected = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: ${colors.darker};
`;
