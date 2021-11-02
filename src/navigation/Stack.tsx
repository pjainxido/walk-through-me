import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "@screen/Home";
import { Timer } from "@screen/Timer";
import { Ionicons } from "@expo/vector-icons";
import { ThemeContext } from "styled-components/native";

const Stack = createStackNavigator();

export default () => {
  const themeContext = useContext(ThemeContext);
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTintColor: themeContext.primaryText,
        headerBackTitleVisible: false,
        cardStyle: {
          backgroundColor: themeContext.mainBackground,
        },
        headerBackImage: () => (
          <Ionicons name='md-arrow-back' color={themeContext.primaryText} size={26} />
        ),
      }}
    >
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Timer' component={Timer} />
    </Stack.Navigator>
  );
};
