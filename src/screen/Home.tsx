import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import { StackNavigationProp } from "@react-navigation/stack";
import ScreenLayout from '@/components/ScreenLayout';
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "./RootStackParams";
import {NavButton} from '@/components/common'

type homeScreenProp = StackNavigationProp<RootStackParamList, "Home">;

const Home = () => {
  const navigation = useNavigation<homeScreenProp>();
  return (
    <ScreenLayout>
      <NavButton onPress={() => navigation.navigate("Timer")}>
        <Text>Timer</Text>
      </NavButton>
      <NavButton onPress={() => navigation.navigate("Log")}>
        <Text>Log</Text>
      </NavButton>
    </ScreenLayout>
  );
};

export default Home;