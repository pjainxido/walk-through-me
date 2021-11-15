import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import ScreenLayout from '@/components/common/ScreenLayout';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from './RootStackParams';
import { MaterialIcons } from '@expo/vector-icons';
import useTheme from '@/utils/hooks/useTheme';
import { NavButton } from '@/components/common';

type homeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

const Home = () => {
  const { primaryText } = useTheme();

  const navigation = useNavigation<homeScreenProp>();
  //timer, log

  return (
    <ScreenLayout>
      <NavButton onPress={() => navigation.navigate('Timer')}>
        <MaterialIcons name="timer" size={24} color={primaryText} />
      </NavButton>
      <NavButton onPress={() => navigation.navigate('Log')}>
        <MaterialIcons name="developer-board" size={24} color={primaryText} />
      </NavButton>
    </ScreenLayout>
  );
};

export default Home;
