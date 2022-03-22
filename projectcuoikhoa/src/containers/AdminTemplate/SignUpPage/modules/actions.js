import api from "utils/apiUtils";
import * as ActionType from "./constants";

export const actSignUpApi = (signup, history) => {
  return (dispatch) => {
    dispatch(actSignUpRequest());
    api
      .post("auth/signup", signup)
      .then((success) => {
        localStorage.setItem("Admin", JSON.stringify(success.data));
        dispatch(actSignUpSuccess(success.data));
        alert("Signup Successfully");
        //!đăng kí đều auto role là Client???
        history.replace("/list-user");//!ko chuyển trang?
      })
      .catch((error) => {
        dispatch(actSignUpFailed(error));
        alert("Failed");
      });
  };
};
const actSignUpRequest = () => {
  return {
    type: ActionType.SIGNUP_REQUEST,
  };
};
const actSignUpSuccess = (data) => {
  return {
    type: ActionType.SIGNUP_SUCCESS,
    payload: data,
  };
};
const actSignUpFailed = (error) => {
  return {
    type: ActionType.SIGNUP_FAILED,
    payload: error,
  };
};
