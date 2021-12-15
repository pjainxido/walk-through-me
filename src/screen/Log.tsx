import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import { ScreenLayout } from '@/components/common';
import BarChart from '@/components/Log/chart/BarChart';
import PieChart from '@components/Log/chart/PieLogChart';
import ProgressChart from '@components/Log/chart/ProgressChart';

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
