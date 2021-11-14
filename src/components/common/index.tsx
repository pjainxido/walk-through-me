import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text, ActivityIndicator, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';

export const NavButton = styled.TouchableOpacity`
  /* margin: 100px; */
  padding: 20px;
  background-color: ${({ theme }) => theme.subColor};
  color: ${({ theme }) => theme.primaryText};
`;

export const DefaultText = styled.Text`
  color: ${({ theme }) => theme.primaryText};
`;

export const TimerButton = styled.TouchableOpacity`
  padding: 20px;
  /* background-color: ${({ theme }) => theme.subColor}; */
  color: ${({ theme }) => theme.primaryText};
  justify-content: center;
  align-items: center;
`;

interface ScreenLayoutProps {
  loading?: boolean;
}

export const ScreenLayout: React.FC<ScreenLayoutProps> = ({
  loading = false,
  children
}) => {
  return (
    <Container>
      {loading ? <ActivityIndicator color="white" /> : children}
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
