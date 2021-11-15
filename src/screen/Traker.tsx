import React from "react";
import { Text, View } from "react-native";
import Tracker from '@/components/Tracker';
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "./RootStackParams";
import ScreenLayout from "@/components/common/ScreenLayout";
import { NavButton } from "@components/common";

type TimerScreenProp = StackNavigationProp<RootStackParamList, "Traker">;

const Traker= () => {
  const navigation = useNavigation<TimerScreenProp>();
  return (
    <ScreenLayout>
      <Tracker/>
      {/* <NavButton onPress={() => navigation.navigate("Timer")}>
        <Text>Timer</Text>
      </NavButton>
      <NavButton onPress={() => navigation.navigate("Log")}>
        <Text>Log</Text>
      </NavButton> */}
    </ScreenLayout>
  );
};

export default Traker;
