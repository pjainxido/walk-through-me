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
