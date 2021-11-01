import React from "react";
import { Text, Button } from "react-native";
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from './RootStackParams'

type homeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>

export const Home = () => {
  const navigation = useNavigation<homeScreenProp>();
  return (
    <>
      <Text>Walk Through Me</Text>
      <Button title='Timer' onPress={()=>navigation.navigate('Timer')}/>
    </>
  );
};
