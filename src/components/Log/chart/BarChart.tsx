import React from 'react';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { LineChart, BarChart as Chart } from 'react-native-chart-kit';
import useTheme from '@/utils/hooks/useTheme';
import { data } from '@utils/mock/data';

interface IBarLogChart {
  width?: number;
  height?: number;
}

const BarChart: React.FC<IBarLogChart> = ({ width = 400, height = 220 }) => {
  const { primaryText, mainBackground, subColor, subBackground } = useTheme();
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
    <Container>
      <Chart
        data={data}
        width={width}
        height={height}
        yAxisSuffix={'s'}
        yAxisLabel="$"
        chartConfig={chartConfig}
        verticalLabelRotation={30}
      />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

export default BarChart;
