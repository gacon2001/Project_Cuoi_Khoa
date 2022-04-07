import api from "utils/apiUtils";
import * as ActionType from "./constants";

export const actLoginApi = (signin, history) => {
  return (dispatch) => {
    dispatch(actLoginRequest());
    api
      .post("auth/signin", signin)
      .then((success) => {
        if (success.data.user.role !== "ADMIN") {
          return Promise.reject({
            response: {
              data: "ONLY ADMIN TO ACCESS",
            },
          });
        }
        localStorage.setItem("Admin", JSON.stringify(success.data));
        history.replace(`/profile/${success.data.user._id}`);
        dispatch(actLoginSuccess(success.data));
      })
      .catch((error) => {
        alert("can/t access")
        dispatch(actLoginFailed(error));
      });
  };
};
const actLoginRequest = () => {
  return {
    type: ActionType.LOGIN_REQUEST,
  };
};
const actLoginSuccess = (data) => {
  return {
    type: ActionType.LOGIN_SUCCESS,
    payload: data,
  };
};
const actLoginFailed = (error) => {
  return {
    type: ActionType.LOGIN_FAILED,
    payload: error,
  };
};
