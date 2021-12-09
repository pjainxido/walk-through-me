import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import BackgroundTimer from 'react-native-background-timer';
import useTheme from '@utils/hooks/useTheme';
import useTracking from '@utils/hooks/useTracking';
import TimeViewer from './TimeViewer';
import TrackerHeader from './TrackerHeader';

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
        <TrackerHeader
          isTracking={isTracking}
          onPressTracking={toggleTracking}
          onPressReset={resetTracker}
          onPressSave={saveTrackerData}
        />
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

const TimerContainer = styled.View`
  flex: 8;
  justify-content: center;
  align-items: center;
`;

export default Tracker;
