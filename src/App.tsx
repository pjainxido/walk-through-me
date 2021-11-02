import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import styled, { ThemeProvider } from "styled-components/native";
import { light, dark } from "@styles/theme";
import Stack from "./navigation/Stack";

export const App = () => {
  const [theme, setTheme] = useState<string>("dark");

  return (
    <ThemeProvider theme={theme === "light" ? light : dark}>
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
      <StatusBar />
    </ThemeProvider>
  );
};

const Container = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.mainBackground};
`;
