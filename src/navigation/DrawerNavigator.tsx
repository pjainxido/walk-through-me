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
import { useSettingState } from '@/context/SettingContext';
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const { primaryText, subColor, mainBackground, subBackground } = useTheme();
  const { menuPosition } = useSettingState();
  const isMenuLeft = menuPosition === 'left';

  const navigation = useNavigation();

  const toggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  const drawerOption: DrawerNavigationOptions = {
    headerShadowVisible: false,
    headerShown: true,
    headerRight: () =>
      isMenuLeft ? null : (
        <MenuIcon size={24} defaultColor={primaryText} onPress={toggleDrawer} />
      ),
    headerLeft: () =>
      isMenuLeft ? (
        <MenuIcon size={24} defaultColor={primaryText} onPress={toggleDrawer} />
      ) : null,
    headerStyle: {
      backgroundColor: subBackground
    },
    headerTitleStyle: {
      color: primaryText
    },
    drawerActiveBackgroundColor: subColor,
    drawerActiveTintColor: mainBackground,
    drawerInactiveTintColor: primaryText,
    drawerType: 'back',
    drawerPosition: menuPosition,
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
          headerShown: false,
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
