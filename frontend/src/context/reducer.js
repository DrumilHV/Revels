import {
  CLEAR_ALERT,
  DISPLAY_ALERT,
  GET_CATEGORIES_BEGIN,
  GET_CATEGORIES_ERROR,
  GET_CATEGORIES_SUCCESS,
  GET_CURRENT_USER_BEGIN,
  GET_CURRENT_USER_SUCCESS,
  GET_EVENTS_BEGIN,
  GET_EVENTS_ERROR,
  GET_EVENTS_SUCCESS,
  KEEP_SCANNING,
  LOGIN_USER_BEGIN,
  LOGIN_USER_ERROR,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  REGISTER_PROSHOW_BEGIN,
  REGISTER_PROSHOW_ERROR,
  REGISTER_PROSHOW_SUCCESS,
  USER_ENTRY_BEGIN,
  USER_ENTRY_ERROR,
  USER_ENTRY_SUCCESS,
  SET_TEAM_ID,
  SET_EVENT_ID,
} from "./action";

import { initialState } from "./appContext";

const reducer = (state, action) => {
  if (action.type === LOGIN_USER_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === LOGIN_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      cc: action.payload.user,
      showAlert: true,
      alertType: "success",
      alertText: "Success! Redirecting...",
    };
  }
  if (action.type === LOGIN_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: "danger",
      alertText: "Provide all values",
    };
  }
  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertType: "",
      alertText: "",
    };
  }
  if (action.type === LOGOUT_USER) {
    return {
      ...initialState,
      ccLoading: false,
      cc: null,
    };
  }
  if (action.type === GET_CURRENT_USER_BEGIN) {
    return { ...state, ccLoading: true, showAlert: false };
  }
  if (action.type === GET_CURRENT_USER_SUCCESS) {
    return {
      ...state,
      ccLoading: false,
      cc: action.payload.user,
    };
  }
  if (action.type === KEEP_SCANNING) {
    return {
      ...state,
      qrMessage: null,
      qrMessageType: "",
    };
  }
  if (action.type === USER_ENTRY_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === USER_ENTRY_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      qrMessage: action.payload.qrMessage,
      qrMessageType: "success",
    };
  }
  if (action.type === USER_ENTRY_ERROR) {
    return {
      ...state,
      isLoading: false,
      qrMessage: action.payload.msg,
      qrMessageType: "danger",
    };
  }
  if (action.type === GET_CATEGORIES_BEGIN) {
    return {
      ...state,
      categoryLoading: true,
    };
  }
  if (action.type === GET_CATEGORIES_SUCCESS) {
    return {
      ...state,
      categoryLoading: false,
      categoriesData: action.payload.categoriesData,
    };
  }
  if (action.type === GET_CATEGORIES_ERROR) {
    return {
      ...state,
      categoryLoading: false,
      categoriesData: action.payload.categoriesData,
      showAlert: true,
      alertText: action.payload.msg,
      alertType: "danger",
    };
  }
  if (action.type === REGISTER_PROSHOW_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === REGISTER_PROSHOW_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }
  if (action.type === REGISTER_PROSHOW_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: action.payload.msg,
    };
  }
  if (action.type === GET_EVENTS_BEGIN) {
    return {
      ...state,
      eventDataLoading: true,
    };
  }
  if (action.type === GET_EVENTS_SUCCESS) {
    return {
      ...state,
      eventDataLoading: false,
      eventData: action.payload.eventData,
    };
  }
  if (action.type === GET_EVENTS_ERROR) {
    return {
      ...state,
      eventDataLoading: false,
      eventData: action.payload.eventData,
    };
  }
  if (action.type === SET_TEAM_ID) {
    return {
      ...state,
      teamID: action.payload.teamID,
    };
  }
  if (action.type === SET_EVENT_ID) {
    return {
      ...state,
      eventID: action.payload.eventID,
    };
  }
  throw new Error(`no such action:${action.type}`);
};

export default reducer;
