import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import BackgroundTimer from 'react-native-background-timer';
import useTheme from '@/utils/hooks/useTheme';
import TimeViewer from './TimeViewer';
import { TimerButton, DefaultText } from '@components/common';
import {
  SaveTrackerIcon,
  ResetTrackerIcon,
  GPSTrackerIcon
} from '@components/common/icons';

const Tracker: React.FC = () => {
  const { primaryText, subBackground, subColor } = useTheme();
  const [time, setTime] = useState<number>(0);
  const [timerOn, setTimerOn] = useState<boolean>(false);
  const [gpsTrackerOn, setGpsTrackerOn] = useState<boolean>(false);

  const startTimer = () => {
    console.log('start timer');
    setTimerOn(true);
    BackgroundTimer.runBackgroundTimer(() => {
      setTime((secs) => {
        return secs + 0.01;
      });
    }, 10);
  };

  const toggleGPSTracker = () => {
    setGpsTrackerOn((prev) => !prev);
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
              <SaveTrackerIcon size={24} defaultColor={primaryText} />
            </IconView>
            <DefaultText>로그 저장</DefaultText>
          </TimerButton>
          <TimerButton onPress={toggleGPSTracker}>
            <IconView>
              <GPSTrackerIcon
                size={24}
                focused={gpsTrackerOn}
                defaultColor={subBackground}
                focusedColor={subColor}
              />
            </IconView>
            <DefaultText>
              {gpsTrackerOn ? 'GPS 정보 기록중 ' : '탭하여 위치 기록'}
            </DefaultText>
          </TimerButton>
          <TimerButton onPress={resetTimer}>
            <IconView>
              <ResetTrackerIcon size={24} defaultColor={primaryText} />
            </IconView>
            <DefaultText>타이머 초기화</DefaultText>
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
  width: 100%;
  flex-direction: row;
`;

const TimerContainer = styled.View`
  flex: 8;
  justify-content: center;
  align-items: center;
`;

export default Tracker;
