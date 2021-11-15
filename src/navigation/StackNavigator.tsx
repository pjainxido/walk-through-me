import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '@screen/Home';
import Timer from '@screen/Timer';
import Log from '@/screen/Log';
import { Ionicons } from '@expo/vector-icons';
import useTheme from '@/utils/hooks/useTheme';

const Stack = createStackNavigator();

export default () => {
  const {primaryText, mainBackground} = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{
        gestureDirection: 'horizontal',
        headerTransparent: true,
        headerTintColor: primaryText,
        headerBackTitleVisible: false,
        cardStyle: {
          backgroundColor: mainBackground
        },
        headerBackImage: () => (
          <Ionicons
            name="md-arrow-back"
            color={primaryText}
            size={26}
          />
        )
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      {/* <Stack.Screen
        name="Timer"
        component={Timer}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Log" component={Log} /> */}
    </Stack.Navigator>
  );
};
