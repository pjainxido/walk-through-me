import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "@screen/Home";
import { Timer } from '@screen/Timer';
import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "black",
        borderBottomColor: "black",
        shadowColor: "black",
      },
      headerTintColor: "#FFFFFF",
      headerBackTitleVisible: false,
      headerBackImage: () => <Ionicons name='md-arrow-back' color={"white"} size={26} />,
    }}
  >
    <Stack.Screen name='Home' component={Home} />
    <Stack.Screen name='Timer' component={Timer} />
  </Stack.Navigator>
);
