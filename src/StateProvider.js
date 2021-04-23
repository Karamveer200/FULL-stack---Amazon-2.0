import React, { createContext, useContext, useReducer } from "react";

//Prepare data layer
export const StateContext = createContext();

//Wrap data and serve data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//Pull data layer
export const useStateValue = () => useContext(StateContext);
