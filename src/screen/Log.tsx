import React from "react";
import { Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "./RootStackParams";
import ScreenLayout from "@components/ScreenLayout";
import { NavButton } from "@components/common/NavButton";

type LogScreenProp = StackNavigationProp<RootStackParamList, "Log">;

const Log = () => {
  const navigation = useNavigation<LogScreenProp>();
  return (
    <ScreenLayout>
      <Text>Log Screen</Text>
      <NavButton onPress={() => navigation.navigate("Home")}>
        <Text>Home</Text>
      </NavButton>
      <NavButton onPress={() => navigation.navigate("Log")}>
        <Text>Log</Text>
      </NavButton>
    </ScreenLayout>
  );
};

export default Log;
