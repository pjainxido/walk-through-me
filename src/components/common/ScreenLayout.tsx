import React from 'react';
import { ActivityIndicator, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';

interface ScreenLayoutProps {
  loading?: boolean;
}

const ScreenLayout: React.FC<ScreenLayoutProps> = ({
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

export default ScreenLayout;
