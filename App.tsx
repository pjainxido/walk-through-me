import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import styled from 'styled-components/native';


export default function App() {
  return (
    <Container>
      <Text>Walk Through Me</Text>
      <StatusBar style="auto" />
    </Container>
  );
}


const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f5fcff;
`;

