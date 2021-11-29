import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '@screen/Home';
import { Ionicons } from '@expo/vector-icons';
import useTheme from '@/utils/hooks/useTheme';
import { LogScreen, TrakerScreen } from '@/screen';

const Stack = createStackNavigator();

export default () => {
  const {primaryText, mainBackground} = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{
        gestureDirection: 'horizontal',
        headerShown: false,
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
      <Stack.Screen
        name="Tracker"
        component={TrakerScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Log" component={LogScreen} />
    </Stack.Navigator>
  );
};
