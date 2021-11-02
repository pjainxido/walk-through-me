import React from "react";
import { ActivityIndicator, View } from "react-native";
import styled from "styled-components/native";

interface ScreenLayoutProps {
  loading?: boolean;
}

const ScreenLayout: React.FC<ScreenLayoutProps> = ({ loading = false, children }) => {
  return <Container>{loading ? <ActivityIndicator color='white' /> : children}</Container>;
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default ScreenLayout;
