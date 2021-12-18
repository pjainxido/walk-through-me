import React from 'react';
import styled from 'styled-components/native';
import DropDownPicker from 'react-native-dropdown-picker';
import { View } from 'react-native';
import { CalendarIcon } from '@/components/common/icons';
import useTheme from '@/utils/hooks/useTheme';

const DatePicker = () => {
  const { primaryText } = useTheme();
  return (
    <Container>
      <DatePickerContainer>
        <CalendarIcon size={15} defaultColor={primaryText} />
      </DatePickerContainer>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: 'row';
`;

const DatePickerContainer = styled.View``;

export default DatePicker;
