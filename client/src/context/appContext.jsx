import { useReducer, useContext, createContext } from "react";
import axios from "axios";
import reducers from "./reducers";

import {
  CLEAR_ALERT,
  DISPLAY_ALERT,
  SETUP_USER_BEGIN,
  SETUP_USER_ERROR,
  SETUP_USER_SUCCESS,
} from "./actions";

const token = localStorage.getItem("token");
const user = localStorage.getItem("user");
const userLocation = localStorage.getItem("location");

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  user: user ? JSON.parse(user) : null,
  token: token,
  userLocation: userLocation || "",
  jobLocation: userLocation || "",
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

  const addUserToLocalStorage = ({ user, token, location }) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
    localStorage.setItem("location", location);
  };

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("location");
  };

  const setupUser = async ({ currentUser, endPoint, alertText }) => {
    dispatch({ type: SETUP_USER_BEGIN });
    try {
      const { data } = await axios.post(
        `http://localhost:4000/api/v1/auth/${endPoint}`,
        currentUser
      );

      const { user, token, location } = data;
      dispatch({
        type: SETUP_USER_SUCCESS,
        payload: { user, token, location, alertText },
      });
      addUserToLocalStorage({ user, token, location });
    } catch (error) {
      dispatch({
        type: SETUP_USER_ERROR,
        payload: { message: error.response.data.message },
      });
    }
    clearAlert();
  };

  return (
    <AppContext.Provider
      value={{ ...state, displayAlert, setupUser }}
      {...props}
    />
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (typeof context === "undefined")
    throw new Error("useAppContext must be used within AppProvider");
  return context;
};
