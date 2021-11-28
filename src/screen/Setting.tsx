import React from 'react';
import styled from 'styled-components/native';
import { View } from 'react-native';
import { getItemFromAsync, setItemToAsync } from '@utils/common';
import { DefaultText, ScreenLayout } from '@/components/common';

const Setting = () => {
  // TODO
  // theme 설정 , default, dark, light
  // icon 내부 텍스트 옵션 on off
  // drawer menu 방향 left or right : default => right
  return (
    <ScreenLayout>
      <Container>
        <InfoText>테마</InfoText>
        <OptionContainer></OptionContainer>
      </Container>
      <Container>
        <InfoText>메뉴 방향</InfoText>
        <OptionContainer></OptionContainer>
      </Container>
      <Container>
        <InfoText>아이콘 텍스트</InfoText>
        <OptionContainer></OptionContainer>
      </Container>
    </ScreenLayout>
  );
};

const Container= styled.View``;
const InfoText = styled.Text``;
const OptionContainer = styled.View``;


export default Setting;
