import { useContext } from 'react';
import { ThemeContext } from 'styled-components/native';

const useTheme = () => {
  const themeContext = useContext(ThemeContext);
  const { primaryText, subColor, mainBackground, subBackground } = themeContext;

  return { primaryText, subColor, mainBackground, subBackground };
};

export default useTheme;
