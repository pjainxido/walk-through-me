import React from 'react';
import styled from 'styled-components/native';
import { DefaultContainer } from '@/components/common';
import { ChartIcon } from '@/components/common/icons';
import DropDownPicker from 'react-native-dropdown-picker';
import useTheme from '@/utils/hooks/useTheme';

export type chartType = 'pie' | 'bar' | 'progress' | null;

interface ILogHeader {
  activeChart: 'pie' | 'bar' | 'progress' | null;
  changeChart: (chart: chartType) => void;
}

const LogHeader: React.FC<ILogHeader> = ({ activeChart, changeChart }) => {
  const { primaryText, subColor, mainBackground, subBackground } = useTheme();
  return (
    <DefaultContainer>
      <DatePickerContainer></DatePickerContainer>
      <ChartTypePickerContainer>
        <ChartIconContainer onPress={()=>changeChart('pie')}>
          <ChartIcon
            size={24}
            defaultColor={subBackground}
            focusedColor={primaryText}
            focused={activeChart === 'pie'}
            chartType="pie"
          />
        </ChartIconContainer>
        <ChartIconContainer onPress={()=>changeChart('bar')}>
          <ChartIcon
            size={24}
            defaultColor={subBackground}
            focusedColor={primaryText}
            focused={activeChart === 'bar'}
            chartType="bar"
          />
        </ChartIconContainer>
        <ChartIconContainer onPress={()=>changeChart('progress')}>
          <ChartIcon
            size={24}
            defaultColor={subBackground}
            focusedColor={primaryText}
            focused={activeChart === 'progress'}
            chartType="progress"
          />
        </ChartIconContainer>
      </ChartTypePickerContainer>
    </DefaultContainer>
  );
};

const ChartTypePickerContainer = styled.View`
  flex: 1;
  flex-direction: row;
`;

const DatePickerContainer = styled.View`
  flex: 1;
  flex-direction: row;
`;

const ChartIconContainer = styled.TouchableOpacity``;

export default LogHeader;
