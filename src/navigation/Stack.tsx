import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "@screen/Home";
import Timer from "@screen/Timer";
import Log from "@/screen/Log";
import { Ionicons } from "@expo/vector-icons";
import { ThemeContext } from "styled-components/native";

const Stack = createStackNavigator();

export default () => {
  const themeContext = useContext(ThemeContext);
  return (
    <Stack.Navigator
      screenOptions={{
        gestureDirection: "horizontal",
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
      <Stack.Screen name='Timer' component={Timer} options={{headerShown: false}}/>
      <Stack.Screen name='Log' component={Log} />
    </Stack.Navigator>
  );
};
