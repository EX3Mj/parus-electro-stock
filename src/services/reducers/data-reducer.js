import { createContext } from "react";

export const DataContext = createContext();

export const DataReducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        sort: action.payload[0].category,
        data: action.payload.slice(1),
        loading: false,
        error: null,
      };

    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
        error: null,
      };

    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
