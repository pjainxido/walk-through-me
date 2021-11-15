import { useContext } from 'react';
import { ThemeContext } from 'styled-components/native';

const useTheme = () => {
  const themeContext = useContext(ThemeContext);
  const { primaryText, subColor, mainBackground, background } = themeContext;

  return { primaryText, subColor, mainBackground, background };
};

export default useTheme;
