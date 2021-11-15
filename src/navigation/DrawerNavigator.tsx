import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import useTheme from '@/utils/hooks/useTheme';
import StackNavigator from './StackNavigator';
import {
  HomeScreen,
  SettingScreen,
  LogScreen,
  TrakerScreen,
} from '@screen/index';
import { HomeIcon } from '@/components/common/icons';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const { primaryText, subColor, mainBackground} = useTheme();
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        overlayColor: 'transparent',
        drawerActiveBackgroundColor: subColor,
        drawerActiveTintColor: mainBackground,
        drawerInactiveTintColor: primaryText,
        drawerType: 'back',
        drawerPosition: 'right',
        drawerStyle: {
          backgroundColor: mainBackground,
          width: 200
        }
      }}
      initialRouteName="Main"
    >
      <Drawer.Screen
        name="Main"
        component={StackNavigator}
        options={{
          drawerLabel: 'HOME',
          drawerIcon: ({ focused, size }) => (
            <HomeIcon
              size={size}
              focused={focused}
              defaultColor={primaryText}
              focusedColor={mainBackground}
            />
          )
        }}
      />
      <Drawer.Screen
        name="Traker"
        component={TrakerScreen}
        options={{
          drawerLabel: 'Traker',
          drawerIcon: ({ focused, size }) => (
            <MaterialIcons
              name="done"
              size={size}
              color={focused ? primaryText : subColor}
            />
          )
        }}
      />
      <Drawer.Screen
        name="Log"
        component={LogScreen}
        options={{
          drawerLabel: 'Log',
          drawerIcon: ({ focused, size }) => (
            <MaterialIcons
              name="done"
              size={size}
              color={focused ? primaryText : subColor}
            />
          )
        }}
      />
      <Drawer.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          drawerLabel: 'Setting',
          drawerIcon: ({ focused, size }) => (
            <MaterialIcons
              name="done"
              size={size}
              color={focused ? primaryText : subColor}
            />
          )
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
