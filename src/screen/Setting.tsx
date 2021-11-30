import React, { useState } from 'react';
import styled from 'styled-components/native';

import { View, Switch, SafeAreaView } from 'react-native';
import { getItemFromAsync, setItemToAsync } from '@utils/common';
import { DefaultText, ScreenLayout } from '@/components/common';
import useTheme from '@/utils/hooks/useTheme';

const Setting = () => {
  const { primaryText, subColor, mainBackground, subBackground } = useTheme();
  const [menuRight, setMenuRight] = useState<boolean>(false);
  const [iconTextPrint, setIconTextPrint] = useState<boolean>(false);
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

const Container = styled.View`
  margin: 50px;
  flex: 1;
  width: 80%;
  align-items: flex-start;
  justify-content: space-evenly;
`;
const OptionContainer = styled.View`
  flex: 1;
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
