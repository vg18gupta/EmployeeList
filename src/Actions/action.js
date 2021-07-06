import { TABLE_DATA_SUCCESS, AUTH_SUCCESS } from "./types";

export const getCoinInfo = () => {
  return (dispatch) => {
    dispatch({
      type: TABLE_DATA_SUCCESS,
    });
  };
};
export const getAuthInfo = () => {
  return (dispatch) => {
    dispatch({
      type: AUTH_SUCCESS,
    });
  };
};
