import * as ActionType from "./constants";
import api from "../../../../../utils/apiUtilsTinh";

export const actSubtypejobsApi = (subtypejobs) => {
  //cai type ak ong
  //de do dung hk ong

  return (dispatch) => {
    dispatch(actSubtypejobsRequest());
    api
      .get(`api/type-jobs/${subtypejobs}`)
      // mà nó vẫn đúng hạ
      //hay đúng nhunwng thiếu hạ ông
      // nó đúng á mà ông ko có làm subtypejobs thôi.a1 tại tui thấy bên wirefarem á
      .then((result) => {
        dispatch(actSubtypejobsSuccess(result.data));
      })
      .catch((error) => {
        dispatch(actSubtypejobsFailed(error));
      });
  };
};

const actSubtypejobsRequest = () => {
  return {
    type: ActionType.SUB_TYPE_JOBS_REQUEST,
  };
};

const actSubtypejobsSuccess = (data) => {
  return {
    type: ActionType.SUB_TYPE_JOBS_SUCCESS,
    payload: data,
  };
};

const actSubtypejobsFailed = (error) => {
  return {
    type: ActionType.SUB_TYPE_JOBS_FAILED,
    payload: error,
  };
};
