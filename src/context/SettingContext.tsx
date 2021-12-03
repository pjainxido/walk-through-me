import React, { useReducer, useContext, createContext, Dispatch } from 'react';
import { ColorSchemeName } from 'react-native';

type menuPosition = 'left' | 'right';

interface SettingState {
  theme: ColorSchemeName;
  isIconSubText: boolean;
  menuPosition: menuPosition;
}

type Action =
  | { type: 'SET_MENU_POSITION'; position: menuPosition }
  | { type: 'SET_THEME'; theme: ColorSchemeName }
  | { type: 'TOGGLE_ICON_SUB' };

type SettingDispatch = Dispatch<Action>;

const SettingStateContext = createContext<SettingState>({
  theme: null,
  isIconSubText: false,
  menuPosition: 'right'
});
const SettingDispatchContext = createContext<SettingDispatch>(() => null);

function reducer(state: SettingState, action: Action): SettingState {
  switch (action.type) {
    case 'SET_MENU_POSITION':
      return {
        ...state,
        menuPosition: action.position
      };
    case 'SET_THEME':
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

  return (
    <SettingStateContext.Provider value={state}>
      <SettingDispatchContext.Provider value={dispatch}>
        {children}
      </SettingDispatchContext.Provider>
    </SettingStateContext.Provider>
  );
}

export function useSettingState() {
  const state = useContext(SettingStateContext);
  if (!state) throw new Error('Cannot find SampleProvider'); // 유효하지 않을땐 에러를 발생
  return state;
}

export function useSettingDispatch() : SettingDispatch{
  const dispatch = useContext(SettingDispatchContext);
  if (!dispatch) throw new Error('Cannot find SampleProvider'); // 유효하지 않을땐 에러를 발생
  return dispatch;
}
