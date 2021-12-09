import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';
import GlobalNavigation from './navigation/GlobalNavigation';
import { SettingProvider } from './context/SettingContext';

export const App = () => {
  return (
    <SettingProvider>
      <GlobalNavigation />
      <StatusBar />
    </SettingProvider>
  );
};
