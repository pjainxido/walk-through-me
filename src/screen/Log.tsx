import React from 'react';
import { Text, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from './RootStackParams';
import { NavButton, DefaultText, ScreenLayout } from '@/components/common';
import LineLogChart from '@/components/Log/chart/LineLogChart';

type LogScreenProp = StackNavigationProp<RootStackParamList, 'Log'>;

const Log = () => {
  return (
    <ScreenLayout>
      <LineLogChart />
    </ScreenLayout>
  );
};

export default Log;
