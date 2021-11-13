import React, { useState } from 'react';
import styled from 'styled-components/native';
import { View, Text } from 'react-native';

interface TimeViewerProps {
  second: number;
}

const TimeViewer: React.FC<TimeViewerProps> = ({ second }) => {
  const clockify = (sec: number) => {
    let decimal = Math.floor(Number(sec.toFixed(2)) * 100 % 100);
    let hours = Math.floor(sec / 60 / 60);
    let mins = Math.floor((sec / 60) % 60);
    let seconds = Math.floor(sec % 60);
    let displayDecimal = decimal < 10 ? `0${decimal}` : decimal;
    let displayHours = hours < 10 ? `0${hours}` : hours;
    let displayMins = mins < 10 ? `0${mins}` : mins;
    let displaySecs = seconds < 10 ? `0${seconds}` : seconds;
    // console.log('tic!');
    return `${displayHours} : ${displayMins} : ${displaySecs}.${displayDecimal}`;
  };
  return (
    <View>
      <TimeText>{clockify(second)}</TimeText>
    </View>
  );
};

const TimeText = styled.Text`
  font-size: 51px;
  color: ${({ theme }) => theme.primaryText};
`;

export default TimeViewer;
