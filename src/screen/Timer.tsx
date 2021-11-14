import React from "react";
import { Text, View } from "react-native";
import TimeTracker from '@/components/TimeTracker';
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "./RootStackParams";
import ScreenLayout from "@components/ScreenLayout";
import { NavButton } from "@components/common";

type TimerScreenProp = StackNavigationProp<RootStackParamList, "Timer">;

const Timer = () => {
  const navigation = useNavigation<TimerScreenProp>();
  return (
    <ScreenLayout>
      <TimeTracker/>
      {/* <NavButton onPress={() => navigation.navigate("Timer")}>
        <Text>Timer</Text>
      </NavButton>
      <NavButton onPress={() => navigation.navigate("Log")}>
        <Text>Log</Text>
      </NavButton> */}
    </ScreenLayout>
  );
};

export default Timer;
