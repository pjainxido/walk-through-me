import React, { useContext } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {ThemeContext} from 'styled-components/native';
import StackNavigator from './StackNavigator';
import {
  HomeScreen,
  SettingScreen,
  LogScreen,
  TimerScreen
} from '@screen/index';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const themeContext = useContext(ThemeContext);
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        overlayColor: 'transparent',
        drawerActiveBackgroundColor: themeContext.subColor,
        drawerActiveTintColor: themeContext.mainBackground,
        drawerInactiveTintColor: themeContext.primaryText,
        drawerType: 'back',
        drawerPosition: 'right',
        drawerStyle: {
          backgroundColor: themeContext.mainBackground,
          width: 200 
        },
      }}
      initialRouteName="Main"
    >
      <Drawer.Screen
        name="Main"
        component={StackNavigator}
        options={{ drawerLabel: 'HOME' }}
      />
      <Drawer.Screen
        name="Timer"
        component={TimerScreen}
        options={{ drawerLabel: 'Timer' }}
      />
      <Drawer.Screen
        name="Log"
        component={LogScreen}
        options={{ drawerLabel: 'Log' }}
      />
      <Drawer.Screen
        name="Setting"
        component={SettingScreen}
        options={{ drawerLabel: 'Setting' }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
