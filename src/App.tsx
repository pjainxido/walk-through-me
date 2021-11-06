import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Appearance, ColorSchemeName } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { ThemeProvider } from 'styled-components/native';
import { light, dark } from '@styles/theme';
import Stack from './navigation/Stack';

export const App = () => {
  const [theme, setTheme] = useState<ColorSchemeName>(null);
  useEffect(() => {
    Appearance.addChangeListener(({ colorScheme }) => {
      setTheme(colorScheme === 'dark' ? 'dark' : 'light');
    });
    return () => {};
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
        <Stack />
      </NavigationContainer>
      <StatusBar />
    </ThemeProvider>
  );
};
