import { TouchableOpacity} from 'react-native-gesture-handler';
import { Text } from 'react-native';
import styled from 'styled-components/native';

export const NavButton= styled.TouchableOpacity`
  /* margin: 100px; */
  padding: 20px;
  background-color: ${({theme})=> theme.subColor};
  color: ${({ theme }) => theme.primaryText};
`;

export const DefaultText = styled.Text`
  color: ${({ theme }) => theme.primaryText};
`