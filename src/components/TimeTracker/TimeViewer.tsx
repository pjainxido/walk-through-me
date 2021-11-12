import React from 'react'
import styled from 'styled-components/native';
import {View, Text} from 'react-native';

interface TimeViewerProps{
  hours: string | number;
  mins: string | number;
  seconds: string | number;
}

const TimeViewer:React.FC<TimeViewerProps> = ({hours, mins, seconds}) => {

  return (
    <TimeText>
      {hours}
      {mins}
      {seconds}
    </TimeText>
      
  )
}


const TimeText = styled.Text`
  font-size: 24;
  color: ${({ theme }) => theme.primaryText};
`

export default TimeViewer
