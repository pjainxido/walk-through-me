import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import useTheme from '@/utils/hooks/useTheme';
import StackNavigator from './StackNavigator';
import { SettingScreen, LogScreen, TrakerScreen, HomeScreen } from '@screen/index';
import { HomeIcon, TrackerIcon, LogIcon, SettingIcon } from '@/components/common/icons';
import Home from '@/screen/Home';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const { primaryText, subColor, mainBackground, subBackground } = useTheme();
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
          backgroundColor: subBackground,
          width: 200
        }
      }}
      initialRouteName="Main"
    >
      <Drawer.Screen
        name="Main"
        component={HomeScreen}
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
            <TrackerIcon
              size={size}
              focused={focused}
              defaultColor={primaryText}
              focusedColor={mainBackground}
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
            <LogIcon
              size={size}
              focused={focused}
              defaultColor={primaryText}
              focusedColor={mainBackground}
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
            <SettingIcon
              size={size}
              focused={focused}
              defaultColor={primaryText}
              focusedColor={mainBackground}
            />
          )
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
