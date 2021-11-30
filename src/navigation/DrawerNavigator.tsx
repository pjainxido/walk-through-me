import React from 'react';
import { TouchableOpacity } from 'react-native';
import {
  createDrawerNavigator,
  DrawerNavigationOptions
} from '@react-navigation/drawer';
import useTheme from '@/utils/hooks/useTheme';
import StackNavigator from './StackNavigator';
import { SettingScreen, LogScreen, TrakerScreen } from '@screen/index';
import {
  HomeIcon,
  TrackerIcon,
  LogIcon,
  SettingIcon,
  MenuIcon
} from '@/components/common/icons';
import { DrawerActions, useNavigation } from '@react-navigation/native';
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const { primaryText, subColor, mainBackground, subBackground } = useTheme();
  const navigation = useNavigation();

  const toggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  const drawerOption: DrawerNavigationOptions = {
    headerShadowVisible: false,
    headerShown: true,
    headerRight: () => (
      <MenuIcon size={24} defaultColor={primaryText} onPress={toggleDrawer} />
    ),
    headerLeft: () => (
      null
      // <MenuIcon size={24} defaultColor={primaryText} onPress={toggleDrawer} />
    ),
    headerStyle: {
      backgroundColor: subBackground,
    },
    headerTitleStyle: {
      color: primaryText
    },
    drawerActiveBackgroundColor: subColor,
    drawerActiveTintColor: mainBackground,
    drawerInactiveTintColor: primaryText,
    drawerType: 'back',
    drawerPosition: 'right',
    drawerStyle: {
      backgroundColor: subBackground,
      width: 200
    }
  };

  return (
    <Drawer.Navigator screenOptions={drawerOption} initialRouteName="Main">
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
          headerShown: false,
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
          headerShown: true,
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
