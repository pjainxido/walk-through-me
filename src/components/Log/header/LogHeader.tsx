import React from 'react';
import styled from 'styled-components/native';
import { DefaultContainer } from '@/components/common';
import { ChartIcon } from '@/components/common/icons';
import DropDownPicker from 'react-native-dropdown-picker';
import useTheme from '@/utils/hooks/useTheme';

export type chartType = 'pie' | 'bar' | 'progress' | null;

interface ILogHeader {
  activeChart: 'pie' | 'bar' | 'progress' | null;
}

const LogHeader: React.FC<ILogHeader> = ({ activeChart }) => {
  const { primaryText, subColor, mainBackground, subBackground } = useTheme();
  return (
    <DefaultContainer>
      <DatePickerContainer></DatePickerContainer>
      <ChartTypePickerContainer>
        <ChartIcon
          size={24}
          defaultColor={subBackground}
          focusedColor={primaryText}
          focused={true}
          chartType="pie"
        />
        <ChartIcon
          size={24}
          defaultColor={subBackground}
          focusedColor={primaryText}
          focused={false}
          chartType="bar"
        />

        <ChartIcon
          size={24}
          defaultColor={subBackground}
          focusedColor={primaryText}
          focused={false}
          chartType="progress"
        />
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

export default LogHeader;
