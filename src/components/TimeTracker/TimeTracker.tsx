import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components/native';
import BackgroundTimer from 'react-native-background-timer';
import { View } from 'react-native';
import { ThemeContext } from 'styled-components/native';

import TimeViewer from './TimeViewer';
import { TimerButton, DefaultText } from '@components/common';
import { MaterialIcons } from '@expo/vector-icons';

const TimeTracker: React.FC = () => {
  const themeContext = useContext(ThemeContext);
  const [time, setTime] = useState<number>(0);
  const [timerOn, setTimerOn] = useState<boolean>(false);

  const startTimer = () => {
    console.log('start timer');
    setTimerOn(true);
    BackgroundTimer.runBackgroundTimer(() => {
      setTime((secs) => {
        return secs + 0.01;
      });
    }, 10);
  };

  const toggleTimer = (timerOn: boolean) => {
    timerOn ? stopTimer() : startTimer();
  };

  const stopTimer = () => {
    console.log('stop');
    setTimerOn(false);
    BackgroundTimer.stopBackgroundTimer();
  };

  useEffect(() => {
    return () => {
      stopTimer();
    };
  }, []);

  const resetTimer = () => {
    setTime(0);
    stopTimer();
  };

  return (
    <BackGroundTouchable onPress={() => toggleTimer(timerOn)}>
      <Container>
        <TimerHeader>
          <TimerButton onPress={resetTimer}>
            <IconView>
              <MaterialIcons
                name="close"
                size={24}
                color={themeContext.primaryText}
              />
            </IconView>
            <DefaultText>타이머 초기화</DefaultText>
          </TimerButton>
          <TimerButton onPress={resetTimer}>
            <IconView>
              <MaterialIcons
                name="done"
                size={24}
                color={themeContext.primaryText}
              />
            </IconView>
            <DefaultText>로그 저장</DefaultText>
          </TimerButton>
          <TimerButton onPress={resetTimer}>
            <IconView>
              <MaterialIcons
                name="directions-walk"
                size={24}
                color={themeContext.primaryText}
              />
            </IconView>
            <DefaultText>트래킹 활성화</DefaultText>
          </TimerButton>
        </TimerHeader>
        <TimerContainer>
          <TimeViewer second={time} />
          <ToggleTimerText>
            {timerOn ? '탭하여 타이머 일시정지' : '탭하여 타이머 시작'}
          </ToggleTimerText>
        </TimerContainer>
      </Container>
    </BackGroundTouchable>
  );
};

const BackGroundTouchable = styled.TouchableHighlight`
  flex: 1;
  width: 100%;
  align-items: center;
`;

const Container = styled.View`
  flex: 1;
  /* width: 100%; */
`;

const ToggleTimerText = styled.Text`
  color: ${({ theme }) => theme.primaryText};
`;

const IconView = styled.View`
  margin-bottom: 15px;
`;

const TimerHeader = styled.View`
  flex: 1;
  top: 30px;
  height: 20px;
  flex-direction: row;
`;

const TimerContainer = styled.View`
  flex: 8;
  justify-content: center;
  align-items: center;
`;

export default TimeTracker;
