import React from 'react';
import styled from 'styled-components/native';
import useTheme from '@/utils/hooks/useTheme';
import { useSettingState } from '@/context/SettingContext';
import { TimerButton, DefaultText } from '@components/common';
import {
  SaveTrackerIcon,
  ResetTrackerIcon,
  GPSTrackerIcon
} from '@components/common/icons';

interface ITrackerHeader {
  isTracking: boolean;
  onPressSave: () => void;
  onPressTracking: () => void;
  onPressReset: () => void;
}

const TrackerHeader: React.FC<ITrackerHeader> = ({
  isTracking,
  onPressReset,
  onPressSave,
  onPressTracking
}) => {
  const { primaryText, subBackground, subColor } = useTheme();
  const { isIconSubText } = useSettingState();
  return (
    <Container>
      <TimerButton onPress={onPressSave}>
        <IconView>
          <SaveTrackerIcon size={36} defaultColor={primaryText} />
        </IconView>
        {isIconSubText && <DefaultText>로그 저장</DefaultText>}
      </TimerButton>
      <TimerButton onPress={onPressTracking}>
        <IconView>
          <GPSTrackerIcon
            size={36}
            focused={isTracking}
            defaultColor={subBackground}
            focusedColor={subColor}
          />
        </IconView>
        {isIconSubText && (
          <DefaultText>
            {isTracking ? '위치 정보 기록중' : '탭하여 위치 기록'}
          </DefaultText>
        )}
      </TimerButton>
      <TimerButton onPress={onPressReset}>
        <IconView>
          <ResetTrackerIcon size={36} defaultColor={primaryText} />
        </IconView>
        {isIconSubText && <DefaultText>타이머 초기화</DefaultText>}
      </TimerButton>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  top: 30px;
  height: 20px;
  width: 100%;
  flex-direction: row;
`;

const IconView = styled.View`
  margin-bottom: 15px;
`;

export default TrackerHeader;
