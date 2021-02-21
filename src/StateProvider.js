import React, { createContext, useReducer } from "react";

const stateContext = createContext();

const { Provider } = stateContext;

const StateProvider = ({ reducer, initialState, children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { StateProvider, stateContext };
