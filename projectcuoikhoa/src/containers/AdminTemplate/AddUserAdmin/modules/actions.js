import * as ActionType from "./constants";
import api from "utils/apiUtils";

export const actAddUserApi = (user) => {
  return (dispatch) => {
    dispatch(actAddUserRequest());
    api
      .post("users", user)
      .then((success) => {
        dispatch(actAddUserSuccess(success.data));
        alert("success")
      })
      .catch((error) => {
        console.log("err", error);
        dispatch(actAddUserFailed(error));
      });
  };
};
const actAddUserRequest = () => {
  return {
    type: ActionType.ADD_USER_REQUEST,
  };
};
const actAddUserSuccess = (data) => {
  return {
    type: ActionType.ADD_USER_SUCCESS,
    payload: data,
  };
};
const actAddUserFailed = (error) => {
  return {
    type: ActionType.ADD_USER_FAILED,
    payload: error,
  };
};
