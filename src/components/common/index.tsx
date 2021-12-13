import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from 'react-native';
import ScreenLayout from './ScreenLayout';
import styled from 'styled-components/native';

export const NavButton = styled.TouchableOpacity`
  margin: 50px;
  border-radius: 10px;
  padding: 20px;
  background-color: ${({ theme }) => theme.subColor};
  color: ${({ theme }) => theme.primaryText};
`;

export const DefaultText = styled.Text`
  color: ${({ theme }) => theme.primaryText};
`;

export const TimerButton = styled.TouchableOpacity`
  flex: 1;
  padding: 20px;
  color: ${({ theme }) => theme.primaryText};
  justify-content: center;
  align-items: center;
`;

export const DefaultContainer = styled.View`
  flex: 1;
`

export { ScreenLayout };
