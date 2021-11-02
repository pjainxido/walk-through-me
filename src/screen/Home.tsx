import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import { StackNavigationProp } from "@react-navigation/stack";
import ScreenLayout from '@/components/ScreenLayout';
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "./RootStackParams";

type homeScreenProp = StackNavigationProp<RootStackParamList, "Home">;

export const Home = () => {
  const navigation = useNavigation<homeScreenProp>();
  return (
    <ScreenLayout>
      <Button onPress={() => navigation.navigate("Timer")}>
        <Text>Timer</Text>
      </Button>
    </ScreenLayout>
  );
};

const Container = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.mainBackground};
`;

const Button = styled.TouchableOpacity`
  /* margin: 100px; */
  background-color: ${({theme})=> theme.background};
  color: ${({ theme }) => theme.primaryText};
`;
