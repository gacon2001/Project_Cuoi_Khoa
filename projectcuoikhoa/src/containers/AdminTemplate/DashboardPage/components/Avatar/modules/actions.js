import api from "utils/apiUtils";
import * as ActionType from "./constants";

export const actUploadAvatarApi = (ava) => {
  return (dispatch) => {
    dispatch(actUploadAvatarRequest());
    api
      .post("Profiles/upload-avatar", ava)
      .then((success) => {
        dispatch(actUploadAvatarSuccess(success.data));
      })
      .catch((error) => {
        dispatch(actUploadAvatarFailed(error));
      });
  };
};
const actUploadAvatarRequest = () => {
  return {
    type: ActionType.UPLOAD_AVATAR_REQUEST,
  };
};
const actUploadAvatarSuccess = (data) => {
  return {
    type: ActionType.UPLOAD_AVATAR_SUCCESS,
    payload: data,
  };
};
const actUploadAvatarFailed = (error) => {
  return {
    type: ActionType.UPLOAD_AVATAR_FAILED,
    payload: error,
  };
};

