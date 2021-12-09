import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import DrawerNavigator from '@navigation/DrawerNavigator';
import { useSettingState } from '@/context/SettingContext';
import { light, dark } from '@styles/theme';

const GlobalNavigation = () => {
  const { theme } = useSettingState();
  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background:
            theme === 'light' ? light.mainBackground : dark.mainBackground
        }
      }}
    >
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default GlobalNavigation;
