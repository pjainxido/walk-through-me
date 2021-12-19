import React, { useState } from 'react';
import styled from 'styled-components/native';
import DropDownPicker from 'react-native-dropdown-picker';
import { CalendarIcon } from '@/components/common/icons';
import { DropDownArrowIcon, CheckIcon } from '@/components/common/icons';
import useTheme from '@/utils/hooks/useTheme';

type DatePickerDropDown = 'day' | 'week' | '1month' | '3month' | '1year';

const DatePicker = () => {
  const { primaryText, subBackground } = useTheme();
  const [openDropDown, setOpenDropDown] = useState(false);
  const [dropDownValue, setDropdownValue] =
    useState<DatePickerDropDown>('week');
  const dropDownItems = [
    { label: '1 day', value: 'day' },
    { label: '1 week', value: 'week' },
    { label: '1 month', value: '1month' },
    { label: '3 month', value: '3month' },
    { label: '1 year', value: '1year' }
  ];
  return (
    <Container>
      <DatePickerContainer>
        <CalendarIcon size={15} defaultColor={primaryText} />
        <DropDownPicker
          open={openDropDown}
          setOpen={setOpenDropDown}
          value={dropDownValue ? dropDownValue.toString() : 'default'}
          setValue={setDropdownValue}
          items={dropDownItems}
          ArrowDownIconComponent={() => (
            <DropDownArrowIcon
              size={24}
              isDown={true}
              defaultColor={primaryText}
            />
          )}
          ArrowUpIconComponent={() => (
            <DropDownArrowIcon size={24} defaultColor={primaryText} />
          )}
          TickIconComponent={() => (
            <CheckIcon size={24} defaultColor={primaryText} />
          )}
          style={{
            backgroundColor: subBackground,
            borderStyle: 'dotted'
          }}
          dropDownContainerStyle={{
            backgroundColor: subBackground
          }}
          textStyle={{
            color: primaryText
          }}
        />
      </DatePickerContainer>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: 'row';
`;

const DatePickerContainer = styled.View``;

export default DatePicker;
