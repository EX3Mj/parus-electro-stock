import { useReducer } from "react";
import { DataContext, DataReducer } from "./data-reducer";

const initialState = {
  data: [],
  sort: '',
  loading: false,
  error: null,
};

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DataReducer, initialState);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};
