import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import 'react-native-gesture-handler'
import styled, { ThemeProvider } from "styled-components/native";
import { light, dark } from "@styles/theme";
import { Home } from "@screen/Home";
import { Timer } from "@screen/Timer";
import Stack from './navigation/Stack';


export const App = () => {
  return (
    <ThemeProvider theme={dark}>
      <NavigationContainer>
        <Stack/>
      </NavigationContainer>
    </ThemeProvider>

    //   <Container>
    //     <StatusBar style='auto' />
    //     <Header>
    //       <Button>Logging</Button>
    //       <Button></Button>
    //     </Header>
    //     <Text>Walk Through Me</Text>
    //   </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.mainBackground};
`;

const Button = styled.Text`
  color: white;
`;

const Header = styled.View`
  position: absolute;
  top: 0px;
  width: 100%;
`;
