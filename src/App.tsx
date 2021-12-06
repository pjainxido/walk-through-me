import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, createContext, useReducer } from 'react';
import { Appearance, ColorSchemeName, useColorScheme } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { getItemFromAsync, setItemToAsync } from '@utils/common';
import { ThemeProvider } from 'styled-components/native';
import { light, dark } from '@styles/theme';
import DrawerNavigator from './navigation/DrawerNavigator';
import { SettingProvider } from './context/SettingContext';

export const App = () => {
  const [theme, setTheme] = useState<ColorSchemeName>(null);

  async function updateTheme() {
    const asyncStoreTheme = await getItemFromAsync('theme');
    const deviceTheme = Appearance.getColorScheme();
    asyncStoreTheme === null
      ? setTheme(deviceTheme)
      : setTheme(asyncStoreTheme === 'dark' ? 'dark' : 'light');
  }
  useEffect(() => {
    updateTheme();
    Appearance.addChangeListener(updateTheme);
    return () => {
      Appearance.removeChangeListener(updateTheme);
    };
  }, []);

  return (
    <SettingProvider>
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
    </SettingProvider>
  );
};
