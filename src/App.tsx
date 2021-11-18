import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, createContext, useReducer } from 'react';
import { Appearance, ColorSchemeName, useColorScheme } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { getItemFromAsync, setItemToAsync } from '@utils/common';
import { ThemeProvider } from 'styled-components/native';
import { light, dark } from '@styles/theme';
import DrawerNavigator from './navigation/DrawerNavigator';

export const App = () => {
  const [theme, setTheme] = useState<ColorSchemeName>(null);

  const syncThemeByDeviceSetting = ({
    colorScheme
  }: Appearance.AppearancePreferences) => {
    if (!theme) setTheme(colorScheme);
  };

  useEffect(() => {
    async function initalSetTheme() {
      setItemToAsync('theme', null);
      const asyncStoreTheme = await getItemFromAsync('theme');
      const deviceTheme = Appearance.getColorScheme();
      console.log(asyncStoreTheme);
      theme === null
        ? setTheme(deviceTheme)
        : setTheme(theme === 'dark' ? 'dark' : 'light');
    }
    initalSetTheme();
    Appearance.addChangeListener(syncThemeByDeviceSetting);
    return () => {
      Appearance.removeChangeListener(syncThemeByDeviceSetting);
    };
  }, []);

  return (
    <ThemeProvider theme={theme === 'light' ? light : dark}>
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
      <StatusBar />
    </ThemeProvider>
  );
};
