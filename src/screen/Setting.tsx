import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Picker } from '@react-native-picker/picker';

import { View, Switch, SafeAreaView } from 'react-native';
import { getItemFromAsync, setItemToAsync } from '@utils/common';
import { DefaultText, ScreenLayout } from '@/components/common';
import useTheme from '@/utils/hooks/useTheme';

const Setting = () => {
  const { primaryText, subColor, mainBackground, subBackground } = useTheme();
  const [menuRight, setMenuRight] = useState<boolean>(false);
  const [selectedTheme, setSelectedTheme] = useState<string>('');
  const [iconTextPrint, setIconTextPrint] = useState<boolean>(false);

  const themeOptions = [
    {
      value: 'Banana'
    },
    {
      value: 'Mango'
    },
    {
      value: 'Pear'
    }
  ];
  const toggleMenu = () => {
    setMenuRight((prev) => !prev);
  };
  const toggleIconTextPrint = () => {
    setIconTextPrint((prev) => !prev);
  };
  // TODO
  // theme 설정 , default, dark, light
  // icon 내부 텍스트 옵션 on off
  // drawer menu 방향 left or right : default => right
  return (
    <ScreenLayout>
      <Container>
        <OptionContainer>
          <InfoText>Theme</InfoText>
          <Picker
            style={{
              height: 100,
              width: 200,
              position: 'relative',
              zIndex: 5000,
            }}
            itemStyle={{
              color: primaryText
            }}
            selectedValue={selectedTheme}
            onValueChange={(itemValue) => setSelectedTheme(itemValue)}
          >
            <Picker.Item label="device theme" value="" />
            <Picker.Item label="light" value="light" />
            <Picker.Item label="dark" value="dark" />
          </Picker>
        </OptionContainer>
        <OptionContainer>
          <InfoText>Menu Position</InfoText>
          <Option>
            <StateText color={menuRight ? subColor : primaryText}>
              {menuRight ? 'right' : 'left'}
            </StateText>
            <Switch
              trackColor={{ false: subBackground, true: subColor }}
              thumbColor={primaryText}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleMenu}
              value={menuRight}
            />
          </Option>
        </OptionContainer>
        <OptionContainer>
          <InfoText>Icon Text Shown</InfoText>
          <Option>
            <Switch
              trackColor={{ false: subBackground, true: subColor }}
              thumbColor={primaryText}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleIconTextPrint}
              value={iconTextPrint}
            />
          </Option>
        </OptionContainer>
      </Container>
    </ScreenLayout>
  );
};

const PickerContainer = styled.View`
  align-self: center;
  /* width: 314;
  border-width: 1;
  border-color: 'rgba(155,155,155,1)';
  border-bottom-left-radius: 10;
  background-color: 'rgba(214,210,210,1)';
  margin-top: 10;
  margin-left: 4; */
`;

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
