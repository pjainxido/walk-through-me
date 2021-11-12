import React, {useState} from 'react';
import styled from 'styled-components/native';
import { View, Text } from 'react-native';

interface TimeViewerProps {
  second: number;
}

const TimeViewer: React.FC<TimeViewerProps> = ({ second }) => {
  const clockify = (sec: number) => {
    let hours = Math.floor(sec / 60 / 60);
    let mins = Math.floor((sec / 60) % 60);
    let seconds = Math.floor(sec % 60);
    let displayHours = hours < 10 ? `0${hours}` : hours;
    let displayMins = mins < 10 ? `0${mins}` : mins;
    let displaySecs = seconds < 10 ? `0${seconds}` : seconds;
    console.log('tic!');
    return `${displayHours} : ${displayMins} : ${displaySecs}`;
  };
  return <TimeText>{clockify(second)}</TimeText>;
};

const TimeText = styled.Text`
  font-size: 51;
  color: ${({ theme }) => theme.primaryText};
`;

export default TimeViewer;
