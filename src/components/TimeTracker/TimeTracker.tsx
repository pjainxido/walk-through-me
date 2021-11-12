import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components/native';
import BackgroundTimer from 'react-native-background-timer';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';
import TimeViewer from './TimeViewer';
import { MaterialIcons } from '@expo/vector-icons';
import { TimerButton, DefaultText } from '@components/common';
import { ThemeContext } from 'styled-components/native';

const TimeTracker: React.FC = () => {
  const themeContext = useContext(ThemeContext);
  const [time, setTime] = useState<number>(0);
  const [timerOn, setTimerOn] = useState<boolean>(false);

  const startTimer = () => {
    BackgroundTimer.runBackgroundTimer(() => {
      setTime((secs) => {
        return secs + 1;
      });
    }, 1000);
  };

  useEffect(() => {
    if (timerOn) startTimer();
    else BackgroundTimer.stopBackgroundTimer();

    return () => {
      BackgroundTimer.stopBackgroundTimer();
    };
  }, [timerOn]);

  const toggleTimer = () => {
    setTimerOn((prev) => !prev);
  };

  const resetTimer = () => {
    setTimerOn(false);
    setTime(0);
  };

  return (
    <BackGroundTouchable onPress={toggleTimer}>
      <View>
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
            {timerOn ? '탭하여 타이머 시작' : '탭하여 타이머 일시정지'}
          </ToggleTimerText>
        </TimerContainer>
      </View>
    </BackGroundTouchable>
  );
};

const BackGroundTouchable = styled.TouchableHighlight`
  flex: 1;
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
  width: 100%;
`;

export default TimeTracker;
