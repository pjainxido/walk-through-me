import React from 'react';
import { DefaultContainer } from '@/components/common';
import { ProgressChart as Chart } from 'react-native-chart-kit';
const data = {
  labels: ['Swim', 'Bike', 'Run'], // optional
  data: [0.4, 0.6, 0.8]
};
interface IProgressLogChart {
  width: number;
  height: number;
}
const ProgressChart: React.FC<IProgressLogChart> = ({ width, height }) => {
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
        strokeWidth={16}
        radius={32}
        chartConfig={chartConfig}
        hideLegend={false}
      />
    </DefaultContainer>
  );
};

export default ProgressChart;
