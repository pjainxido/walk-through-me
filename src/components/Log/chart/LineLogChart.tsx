import React from 'react';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import useTheme from '@/utils/hooks/useTheme';

const LineLogChart = () => {
  const {primaryText, mainBackground, subColor, subBackground}=useTheme();
  return (
    <Container>
      <LineChart
        onDataPointClick={(item) => {
          console.log(item.dataset);
        }}
        data={{
          labels: ['January', 'February', 'March', 'April', 'May', 'June'],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100
              ]
            }
          ]
        }}
        width={Dimensions.get('window').width } // from react-native
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726'
          }
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16
        }}
      />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

export default LineLogChart;
