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

export const SettingIcon: React.FC<iconProps> = ({
  focused,
  defaultColor,
  focusedColor,
  size
}) => {
  return (
    <MaterialIcons
      name="settings"
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

export const SaveTrackerIcon: React.FC<iconProps> = ({
  focused,
  defaultColor,
  focusedColor,
  size
}) => {
  return (
    <MaterialIcons
      name="done"
      size={size}
      color={focused ? focusedColor : defaultColor}
    />
  );
};

export const ResetTrackerIcon: React.FC<iconProps> = ({
  focused,
  defaultColor,
  focusedColor,
  size
}) => {
  return (
    <MaterialIcons
      name="close"
      size={size}
      color={focused ? focusedColor : defaultColor}
    />
  );
};

export const GPSTrackerIcon: React.FC<iconProps> = ({
  focused,
  defaultColor,
  focusedColor,
  size
}) => {
  return (
    <MaterialIcons
      name="directions-walk"
      size={size}
      color={focused ? focusedColor : defaultColor}
    />
  );
};