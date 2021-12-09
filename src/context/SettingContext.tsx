import React, {
  useEffect,
  useReducer,
  useContext,
  createContext,
  Dispatch
} from 'react';
import { Appearance, ColorSchemeName } from 'react-native';
import { getItemFromAsync, setItemToAsync } from '@utils/common';
import { ThemeProvider } from 'styled-components/native';
import { light, dark } from '@styles/theme';

type menuPosition = 'left' | 'right';

interface SettingState {
  theme: ColorSchemeName;
  isIconSubText: boolean;
  menuPosition: menuPosition;
}

type Action =
  | { type: 'SET_MENU_POSITION'; position: menuPosition }
  | { type: 'TOGGLE_MENU_POSITION' }
  | { type: 'SET_THEME'; theme: ColorSchemeName }
  | { type: 'TOGGLE_ICON_SUB' };

type SettingDispatch = Dispatch<Action>;

const SettingStateContext = createContext<SettingState>({
  theme: null,
  isIconSubText: false,
  menuPosition: 'left'
});
const SettingDispatchContext = createContext<SettingDispatch>(() => null);

function reducer(state: SettingState, action: Action): SettingState {
  switch (action.type) {
    case 'SET_MENU_POSITION':
      setItemToAsync('menuPosition', action.position);
      return {
        ...state,
        menuPosition: action.position
      };
    case 'TOGGLE_MENU_POSITION':
      setItemToAsync(
        'menuPosition',
        state.menuPosition === 'right' ? 'left' : 'right'
      );
      return {
        ...state,
        menuPosition: state.menuPosition === 'right' ? 'left' : 'right'
      };
    case 'SET_THEME':
      setItemToAsync('theme', action.theme);
      return {
        ...state,
        theme: action.theme
      };
    case 'TOGGLE_ICON_SUB':
      return {
        ...state,
        isIconSubText: !state.isIconSubText
      };
    default:
      throw new Error('Unhandled action');
  }
}

export function SettingProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, {
    theme: null,
    isIconSubText: false,
    menuPosition: 'right'
  });
  const { theme } = state;
  const setTheme = (value: ColorSchemeName) => {
    dispatch({ type: 'SET_THEME', theme: value });
  };
  //App.tsx theme options add here
  async function updateTheme() {
    const asyncStoreTheme = await getItemFromAsync('theme');
    const deviceTheme = Appearance.getColorScheme();
    asyncStoreTheme === null
      ? setTheme(deviceTheme)
      : setTheme(asyncStoreTheme === 'dark' ? 'dark' : 'light');
  }
  useEffect(() => {
    console.log(theme);
  }, [theme]);
  useEffect(() => {
    console.log(theme);
    updateTheme();
    Appearance.addChangeListener(updateTheme);
    return () => {
      Appearance.removeChangeListener(updateTheme);
    };
  }, []);

  return (
    <SettingStateContext.Provider value={state}>
      <SettingDispatchContext.Provider value={dispatch}>
        <ThemeProvider theme={theme === 'light' ? light : dark}>
          {children}
        </ThemeProvider>
      </SettingDispatchContext.Provider>
    </SettingStateContext.Provider>
  );
}

export function useSettingState() {
  const state = useContext(SettingStateContext);
  if (!state) throw new Error('Cannot find SampleProvider'); // 유효하지 않을땐 에러를 발생
  return state;
}

export function useSettingDispatch(): SettingDispatch {
  const dispatch = useContext(SettingDispatchContext);
  if (!dispatch) throw new Error('Cannot find SampleProvider'); // 유효하지 않을땐 에러를 발생
  return dispatch;
}
