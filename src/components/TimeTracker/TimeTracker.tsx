import React, { useState, useEffect } from 'react';
import BackgroundTimer from 'react-native-background-timer';
import { View, Text } from 'react-native';
import TimeViewer from './TimeViewer';
import { TimerButton } from '@components/common';

const TimeTracker: React.FC = () => {
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
    <View>
      <TimeViewer second={time} />
      <TimerButton onPress={toggleTimer}>
        <Text>start/stop</Text>
      </TimerButton>
      <TimerButton onPress={resetTimer}>
        <Text>reset</Text>
      </TimerButton>
    </View>
  );
};

export default TimeTracker;
