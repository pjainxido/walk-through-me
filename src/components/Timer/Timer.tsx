import React, { useState, useEffect } from 'react';
import BackgroundTimer from 'react-native-background-timer';
import { View, Text } from 'react-native';
import { TimerButton } from '@components/common';
import styled from 'styled-components/native';

const Timer: React.FC = () => {
  const [time, setTime] = useState<number>(0);
  const [timerOn, setTimerOn] = useState<boolean>(false);

  const clockify = () => {
    let hours = Math.floor(time / 60 / 60);
    let mins = Math.floor((time / 60) % 60);
    let seconds = Math.floor(time % 60);
    let displayHours = hours < 10 ? `0${hours}` : hours;
    let displayMins = mins < 10 ? `0${mins}` : mins;
    let displaySecs = seconds < 10 ? `0${seconds}` : seconds;
    return {
      displayHours,
      displayMins,
      displaySecs
    };
  };

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
      <Text></Text>
      <TimerButton onPress={toggleTimer}>
        <Text>start/stop</Text>
      </TimerButton>
      <TimerButton onPress={resetTimer}>
        <Text>reset</Text>
      </TimerButton>
    </View>
  );
};

export default Timer;
