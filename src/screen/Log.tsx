import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import { ScreenLayout } from '@/components/common';
import LogHeader from '@/components/Log/header/LogHeader';
import BarChart from '@/components/Log/chart/BarChart';
import PieChart from '@components/Log/chart/PieLogChart';
import ProgressChart from '@components/Log/chart/ProgressChart';
import { chartType } from '@/components/Log/header/LogHeader';

const Log = () => {
  const [activeChart, setActiveChart] = useState<chartType>('pie');

  const changeChart = (chart: chartType) => {
    setActiveChart(chart);
  }

  const chartWidth = Dimensions.get('window').width * 0.7;

  const Contents = (activeChart: chartType) => {
    switch (activeChart) {
      case 'bar':
        return <BarChart width={chartWidth} />;
      case 'pie':
        return <PieChart width={chartWidth} />;
      case 'progress':
        return <ProgressChart width={chartWidth} height={220} />;
      default:
        return null;
    }
  };

  return <ScreenLayout>
    <LogHeader activeChart={activeChart} changeChart={changeChart} />
    {Contents(activeChart)}
    </ScreenLayout>;
};

export default Log;
