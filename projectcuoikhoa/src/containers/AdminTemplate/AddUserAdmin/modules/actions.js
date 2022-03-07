import * as ActionType from "./constants";
import api from "utils/apiUtils";

export const actAddUserApi = (user) => {
  return (dispatch) => {
    console.log(213);
    dispatch(actAddUserRequest());
    api
      .post("users", user)//z body có object nên ở đây Vân thêm parám user đại diện đúng ko H? đúng òi á Vân
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
