import { useReducer, useContext, useEffect } from "react";
import React from "react";
import reducer from "./reducer";

import axios from "axios";
import {
  CLEAR_ALERT,
  DISPLAY_ALERT,
  GET_CATEGORIES_BEGIN,
  GET_CATEGORIES_ERROR,
  GET_CATEGORIES_SUCCESS,
  GET_CURRENT_USER_BEGIN,
  GET_CURRENT_USER_SUCCESS,
  KEEP_SCANNING,
  LOGIN_USER_BEGIN,
  LOGIN_USER_ERROR,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  USER_ENTRY_BEGIN,
  USER_ENTRY_ERROR,
  USER_ENTRY_SUCCESS,
} from "./action";

export const initialState = {
  ccLoading: true,
  isLoading: false,
  cc: null,
  qrMessage: null,
  qrMessageType: "",
  alertText: "",
  alertType: "",
  showAlert: false,
  categoriesData: null,
  categoryLoading: false,
};

const baseUrl = "http://172.20.10.13:8080";

const AppContext = React.createContext();

function prettifyJSON(jsonObject) {
  let prettyString = "";
  for (const key in jsonObject) {
    if (
      Object.hasOwnProperty.call(jsonObject, key) &&
      jsonObject[key] !== undefined
    ) {
      prettyString += `${key}: ${jsonObject[key]}<br>`;
    }
  }
  return prettyString;
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const authFetch = axios.create({
    baseURL: `${baseUrl}/api`,
    withCredentials: true,
  });

  // auth request
  authFetch.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  //auth response
  authFetch.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status === 401) {
        logoutUser();
      }
      return Promise.reject(error);
    }
  );

  const getCategories = async () => {
    dispatch({ type: GET_CATEGORIES_BEGIN });
    try {
      const { data } = await authFetch.get("/events/dropdown");
      data.push({
        category_type: "PROSHOW",
        categories: [{ category_name: "PROSHOW", events: ["PROSHOW"] }],
      });
      dispatch({
        type: GET_CATEGORIES_SUCCESS,
        payload: {
          categoriesData: data,
        },
      });
    } catch (err) {
      dispatch({
        type: GET_CATEGORIES_ERROR,
        payload: {
          categoriesData: [],
          msg: err.response.data.msg,
        },
      });
    }
  };

  const UserEntry = async (QRData) => {
    dispatch({ type: USER_ENTRY_BEGIN });
    try {
      const { data } = await authFetch.post("/QR/event-entry", { QRData });
      const { team } = data;
      team.__v = undefined;
      team._id = undefined;
      console.log(prettifyJSON(team));
      dispatch({
        type: USER_ENTRY_SUCCESS,
        payload: {
          qrMessage: prettifyJSON(team),
        },
      });
    } catch (err) {
      console.log(err.response.data.msg),
        dispatch({
          type: USER_ENTRY_ERROR,
          payload: {
            msg: err.response.data.msg,
          },
        });
    }
  };

  const keepScanning = async () => {
    dispatch({ type: KEEP_SCANNING });
  };

  const loginUser = async (currentUser) => {
    dispatch({ type: LOGIN_USER_BEGIN });
    try {
      const { data } = await axios.post(
        `${baseUrl}/api/cc/login`,
        currentUser,
        { withCredentials: true }
      );
      const { user } = data;
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: {
          user,
        },
      });
    } catch (err) {
      dispatch({
        type: LOGIN_USER_ERROR,
        payload: { msg: err.response.data.msg },
      });
    }
    clearAlert();
  };

  const logoutUser = async () => {
    await authFetch.get("/cc/logout");
    dispatch({ type: LOGOUT_USER });
  };

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };

  const getCurrentUser = async () => {
    dispatch({ type: GET_CURRENT_USER_BEGIN });
    try {
      const { data } = await authFetch("/cc/getCurrentUser");
      const { user, location } = data;
      dispatch({ type: GET_CURRENT_USER_SUCCESS, payload: { user, location } });
    } catch (err) {
      if (err.response.status === 401) return;
      logoutUser();
    }
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        logoutUser,
        loginUser,
        keepScanning,
        UserEntry,
        getCategories,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
