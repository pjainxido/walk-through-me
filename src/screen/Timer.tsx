import React from "react";
import { Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "./RootStackParams";
import ScreenLayout from "@components/ScreenLayout";
import { NavButton } from "@components/common/NavButton";

type TimerScreenProp = StackNavigationProp<RootStackParamList, "Timer">;

const Timer = () => {
  const navigation = useNavigation<TimerScreenProp>();
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

export default Timer;
