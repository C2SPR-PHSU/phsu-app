import { useReducer } from "react";

export const initialMainState = {
  activate: false,
};

export type MainState = {
  activate: Boolean;
};

type Actions = "ACTIVATE"

interface Payload {
  activate?: Boolean;
}

export interface GlobalAction {
  type: Actions;
  payload?: Payload;
}

const reducer = (state: any, action: GlobalAction) => {
  switch (action.type) {
    case "ACTIVATE": {
      return { ...state, activate: !state.activate };
    }
    default:
      return state;
  }
};

const useMainState = () => {
  return useReducer(reducer, initialMainState);
};

export default useMainState;
