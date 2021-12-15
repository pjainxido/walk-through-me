import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import DropDownPicker from 'react-native-dropdown-picker';

import { Switch } from 'react-native';
import { ScreenLayout } from '@/components/common';
import {
  useSettingState,
  useSettingDispatch,
  Theme
} from '@/context/SettingContext';

import useTheme from '@/utils/hooks/useTheme';

const Setting = () => {
  const { primaryText, subColor, mainBackground, subBackground } = useTheme();
  const dispatch = useSettingDispatch();
  const { theme, isIconSubText, menuPosition } = useSettingState();
  const [openDropDown, setOpenDropDown] = useState(false);
  const [dropDownValue, setDropdownValue] = useState<Theme>('default');

  useEffect(() => {
    setDropdownValue(theme);
    console.log(theme);
  }, [theme]);

  const switchThumbColor = theme === 'light' ? mainBackground : primaryText;

  const dropDownItems = [
    { label: 'device theme', value: 'default' },
    { label: 'light', value: 'light' },
    { label: 'dark', value: 'dark' }
  ];
  const changeTheme = (value: any) => {
    value === ''
      ? dispatch({ type: 'SET_THEME', theme: null })
      : dispatch({ type: 'SET_THEME', theme: value });
  };

  const toggleMenuPosition = () => {
    dispatch({ type: 'TOGGLE_MENU_POSITION' });
  };
  const toggleIconTextPrint = () => {
    dispatch({ type: 'TOGGLE_ICON_SUB' });
  };
  return (
    <ScreenLayout>
      <Container>
        <OptionContainer>
          <InfoText>Theme</InfoText>
          <DropDownPicker
            open={openDropDown}
            setOpen={setOpenDropDown}
            value={dropDownValue ? dropDownValue.toString() : 'default'}
            setValue={changeTheme}
            items={dropDownItems}
            style={{
              backgroundColor: subBackground,
              borderStyle: 'dotted'
            }}
          />
        </OptionContainer>
        <OptionContainer>
          <InfoText>Menu Position</InfoText>
          <Option>
            <StateText
              color={menuPosition === 'right' ? subColor : primaryText}
            >
              {menuPosition === 'right' ? 'right' : 'left'}
            </StateText>
            <Switch
              trackColor={{ false: subBackground, true: subColor }}
              thumbColor={switchThumbColor}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleMenuPosition}
              value={menuPosition === 'right'}
            />
          </Option>
        </OptionContainer>
        <OptionContainer>
          <InfoText>Icon Text Shown</InfoText>
          <Option>
            <Switch
              trackColor={{ false: subBackground, true: subColor }}
              thumbColor={switchThumbColor}
              onValueChange={toggleIconTextPrint}
              value={isIconSubText}
            />
          </Option>
        </OptionContainer>
      </Container>
    </ScreenLayout>
  );
};

const Container = styled.View`
  margin: 50px;
  flex: 1;
  width: 80%;
  align-items: flex-start;
  justify-content: space-evenly;
`;
const OptionContainer = styled.View`
  flex: 2;
  width: 100%;
  margin-bottom: 50px;
`;
const InfoText = styled.Text`
  flex: 1;
  font-size: 15px;
  color: ${({ theme }) => theme.primaryText};
`;

interface stateTextProps {
  color: string;
}

const StateText = styled.Text<stateTextProps>`
  font-size: 25px;
  color: ${({ color }) => color};
`;
const Option = styled.View`
  flex: 2;
  justify-content: space-around;
`;

export default Setting;
