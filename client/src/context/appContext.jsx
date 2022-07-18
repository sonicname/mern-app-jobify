import { useReducer, useContext, createContext } from "react";
import reducers from "./reducers";

import { CLEAR_ALERT, DISPLAY_ALERT } from "./actions";

export const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
};

const AppContext = createContext(null);

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(reducers, initialState);

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({
        type: CLEAR_ALERT,
      });
    }, 3000);
  };

  return <AppContext.Provider value={{ ...state, displayAlert }} {...props} />;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (typeof context === "undefined")
    throw new Error("useAppContext must be used within AppProvider");
  return context;
};
