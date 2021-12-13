import React from 'react';
import useTheme from '@/utils/hooks/useTheme';
import { DefaultContainer } from '@/components/common';
import { PieChart as Chart } from 'react-native-chart-kit';

const data = [
  {
    name: 'Seoul',
    time: 21500000,
    color: 'rgba(131, 167, 234, 1)',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15
  },
  {
    name: 'Toronto',
    time: 2800000,
    color: '#F00',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15
  },
  {
    name: 'Beijing',
    time: 527612,
    color: 'red',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15
  },
  {
    name: 'New York',
    time: 8538000,
    color: '#ffffff',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15
  },
  {
    name: 'Moscow',
    time: 11920000,
    color: 'rgb(0, 0, 255)',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15
  }
];

interface IPieLogChart {
  width?: number;
  height?: number;
}

const PieChart: React.FC<IPieLogChart> = ({ width = 400, height = 220 }) => {
  const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#08130D',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };
  return (
    <DefaultContainer>
      <Chart
        data={data}
        width={width}
        height={height}
        chartConfig={chartConfig}
        accessor={'time'}
        backgroundColor={'transparent'}
        paddingLeft={'15'}
        center={[10, 50]}
        absolute
      />
    </DefaultContainer>
  );
};

export default PieChart;
