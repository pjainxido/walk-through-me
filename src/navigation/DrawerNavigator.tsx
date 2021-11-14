import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigator from './StackNavigator';
import {
  HomeScreen,
  SettingScreen,
  LogScreen,
  TimerScreen
} from '@screen/index';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
       component={HomeScreen}
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
