import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text } from "react-native";
import styled, { ThemeProvider } from "styled-components/native";
import { light, dark } from "@styles/theme";

export default function App() {
  return (
    <ThemeProvider theme={light}>
      <Container>
        <StatusBar style='auto' />
        <Header>
          <Button>Logging</Button>
          <Button></Button>
        </Header>
        <Text>Walk Through Me</Text>
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({theme})=> theme.mainBackground};
`;

const Button = styled.Text`
  color: white;
`;

const Header = styled.View`
  position: absolute;
  top: 0px;
  width: 100%;
`;
