import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import BackgroundTimer from 'react-native-background-timer';
import useTheme from '@utils/hooks/useTheme';
import useTracking from '@utils/hooks/useTracking';
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
  const [isTracking, setIsTracking] = useState(false);
  // const { location, history, distance } = useTracking(isTracking);

  const toggleTracking = () => {
    setIsTracking((prev) => !prev);
  };

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

  const resetTracker = () => {
    setTime(0);
    stopTimer();
  };

  const saveTrackerData = () => {
    stopTimer();
    //data 저장 관련 modal pop up
    //if save
    resetTracker(); // 모달에서 저장후 데이터 초기화
    //if not save
    //미저장시 트래커 재개
  };

  return (
    <BackGroundTouchable onPress={() => toggleTimer(timerOn)}>
      <Container>
        <TimerHeader>
          <TimerButton onPress={saveTrackerData}>
            <IconView>
              <SaveTrackerIcon size={36} defaultColor={primaryText} />
            </IconView>
            <DefaultText>로그 저장</DefaultText>
          </TimerButton>
          <TimerButton onPress={toggleTracking}>
            <IconView>
              <GPSTrackerIcon
                size={36}
                focused={isTracking}
                defaultColor={subBackground}
                focusedColor={subColor}
              />
            </IconView>
            <DefaultText>
              {isTracking ? '위치 정보 기록중' : '탭하여 위치 기록'}
            </DefaultText>
          </TimerButton>
          <TimerButton onPress={resetTracker}>
            <IconView>
              <ResetTrackerIcon size={36} defaultColor={primaryText} />
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

const BackGroundTouchable = styled.TouchableOpacity`
  flex: 1;
  width: 100%;
  align-items: center;
`;

const Container = styled.View`
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
  width: 100%;
  flex-direction: row;
`;

const TimerContainer = styled.View`
  flex: 8;
  justify-content: center;
  align-items: center;
`;

export default Tracker;
