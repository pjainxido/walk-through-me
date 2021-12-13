import React from 'react';
import { Text, View, Dimensions } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from './RootStackParams';
import { NavButton, DefaultText, ScreenLayout } from '@/components/common';
import BarChart from '@/components/Log/chart/BarChart';
import PieChart from '@components/Log/chart/PieLogChart';
import ProgressChart from '@components/Log/chart/ProgressChart';

type LogScreenProp = StackNavigationProp<RootStackParamList, 'Log'>;

const Log = () => {
  const chartWidth = Dimensions.get('window').width * 0.7;
  return (
    <ScreenLayout>
      <BarChart width={chartWidth} />
      <PieChart width={chartWidth} />
      <ProgressChart width={chartWidth} height={220} />
    </ScreenLayout>
  );
};

export default Log;
