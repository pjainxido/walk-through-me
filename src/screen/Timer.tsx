import React from "react";
import { Text, Button } from "react-native";
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from './RootStackParams'
import ScreenLayout from '@components/ScreenLayout';

type TimerScreenProp = StackNavigationProp<RootStackParamList, 'Timer'>

export const Timer= () => {
  const navigation = useNavigation<TimerScreenProp>();
  return (
    <ScreenLayout>
      <Text>Timer Screen</Text>
      <Button title='Home' onPress={()=>navigation.navigate('Home')}/>
    </ScreenLayout>
  );
};

