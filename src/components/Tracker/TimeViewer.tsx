import React from 'react';
import styled from 'styled-components/native';
import { clockify } from '@/utils/common';
import { View, Text } from 'react-native';

interface TimeViewerProps {
  second: number;
}

const TimeViewer: React.FC<TimeViewerProps> = ({ second }) => {
  return (
    <TimeContainer>
      <TimeText>{clockify(second).displayHours}</TimeText>
      <TimeDivider>:</TimeDivider>
      <TimeText>{clockify(second).displayMins}</TimeText>
      <TimeDivider>:</TimeDivider>
      <TimeText>{clockify(second).displaySecs}</TimeText>
      <TimeDivider>,</TimeDivider>
      <TimeText>{clockify(second).displayDecimal}</TimeText>
    </TimeContainer>
  );
};

const TimeContainer = styled.View`
  flex-direction: row;
`;

const TimeText = styled.Text`
  font-size: 42px;
  min-width: 55px;
  color: ${({ theme }) => theme.primaryText};
`;

const TimeDivider = styled.Text`
  font-size: 42px;
  color: ${({ theme }) => theme.primaryText};
`;

export default TimeViewer;
