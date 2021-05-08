import { createContext, useContext, useReducer } from "react";

const DataContext = createContext();

export const DataLayer = ({ initialState, reducer, children }) => {
  return (
    <DataContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataLayerValue = () => useContext(DataContext);
