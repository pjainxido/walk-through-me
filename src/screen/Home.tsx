import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import ScreenLayout from '@/components/common/ScreenLayout';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from './RootStackParams';
import useTheme from '@/utils/hooks/useTheme';
import { LogIcon, TrackerIcon } from '@/components/common/icons';
import { NavButton } from '@/components/common';

type homeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

const Home = () => {
  const { mainBackground } = useTheme();

  const navigation = useNavigation<homeScreenProp>();
  //timer, log

  return (
    <ScreenLayout>
      <NavButton onPress={() => navigation.navigate('Traker')}>
        <TrackerIcon size={50} defaultColor={mainBackground} />
      </NavButton>
      <NavButton onPress={() => navigation.navigate('Log')}>
        <LogIcon size={50} defaultColor={mainBackground} />
      </NavButton>
    </ScreenLayout>
  );
};

export default Home;
