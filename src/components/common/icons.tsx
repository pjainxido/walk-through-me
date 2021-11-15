import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
interface iconProps {
  focusedColor?: string;
  defaultColor: string;
  size: number;
  focused?: boolean;
}

export const HomeIcon: React.FC<iconProps> = ({
  focused,
  defaultColor,
  focusedColor,
  size
}) => {
  return (
    <MaterialIcons
      name="home"
      size={size}
      color={focused ? focusedColor : defaultColor}
    />
  );
};

export const LogIcon: React.FC<iconProps> = ({
  focused,
  defaultColor,
  focusedColor,
  size
}) => {
  return (
    <MaterialIcons
      name="developer-board"
      size={size}
      color={focused ? focusedColor : defaultColor}
    />
  );
};

export const TrackerIcon: React.FC<iconProps> = ({
  focused,
  defaultColor,
  focusedColor,
  size
}) => {
  return (
    <MaterialIcons
      name="timer"
      size={size}
      color={focused ? focusedColor : defaultColor}
    />
  );
};