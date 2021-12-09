import React, {
  useState,
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
import { LOCAL_STORE_KEY } from '@utils/constants';

type menuPosition = 'left' | 'right';
type Theme = ColorSchemeName | 'default';

interface SettingState {
  theme: Theme;
  isIconSubText: boolean;
  menuPosition: menuPosition;
}

type Action =
  | { type: 'SET_INIT_STATE'; state: SettingState }
  | { type: 'SET_MENU_POSITION'; position: menuPosition }
  | { type: 'TOGGLE_MENU_POSITION' }
  | { type: 'SET_THEME'; theme: Theme }
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
    case 'SET_INIT_STATE':
      console.log(action.state, 'SET_INIT');
      return {
        ...state,
        theme: action.state.theme,
        isIconSubText: action.state.isIconSubText,
        menuPosition: action.state.menuPosition
      };

    case 'SET_MENU_POSITION':
      // setItemToAsync('menuPosition', action.position);
      return {
        ...state,
        menuPosition: action.position
      };
    case 'TOGGLE_MENU_POSITION':
      // setItemToAsync(
      //   'menuPosition',
      //   state.menuPosition === 'right' ? 'left' : 'right'
      // );
      return {
        ...state,
        menuPosition: state.menuPosition === 'right' ? 'left' : 'right'
      };
    case 'SET_THEME':
      // setItemToAsync('theme', action.theme);
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
  const [isInitSync, setIsInitSync] = useState(false);
  const [activeTheme, setActiveTheme] = useState<ColorSchemeName>(null);
  const [state, dispatch] = useReducer(reducer, {
    theme: 'default',
    isIconSubText: true,
    menuPosition: 'right'
  });
  const { theme } = state;

  const dispatchTheme = (value: ColorSchemeName) => {
    setActiveTheme(value);
    dispatch({ type: 'SET_THEME', theme: value });
  };

  const isSetting = (arg: any): arg is SettingState => {
    return (
      typeof arg === 'object' &&
      arg.theme !== undefined &&
      typeof arg.theme === 'string' &&
      arg.isIconSubText !== undefined &&
      typeof arg.isIconSubText === 'boolean' &&
      arg.menuPosition !== undefined &&
      typeof arg.menuPosition === 'string'
    );
  };

  const syncLocalValue = async () => {
    const asyncStoreValue = await getItemFromAsync(LOCAL_STORE_KEY);
    isSetting(asyncStoreValue)
      ? dispatch({ type: 'SET_INIT_STATE', state: asyncStoreValue })
      : setItemToAsync(LOCAL_STORE_KEY, state);
  };

  async function syncDeviceTheme() {
    const deviceTheme = Appearance.getColorScheme();
    if (theme === 'default') setActiveTheme(deviceTheme);
  }

  useEffect(() => {
    if (isInitSync) {
      syncDeviceTheme();
      state.theme !== 'default' && setActiveTheme(state.theme);
      setItemToAsync(LOCAL_STORE_KEY, state);
    }
  }, [state]);

  useEffect(() => {
    syncLocalValue();
    syncDeviceTheme();
    Appearance.addChangeListener(syncDeviceTheme);
    setIsInitSync(true);
    return () => {
      Appearance.removeChangeListener(syncDeviceTheme);
    };
  }, []);

  return (
    <SettingStateContext.Provider value={state}>
      <SettingDispatchContext.Provider value={dispatch}>
        <ThemeProvider theme={activeTheme === 'light' ? light : dark}>
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
