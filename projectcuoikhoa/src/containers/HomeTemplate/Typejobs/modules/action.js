import * as ActionType from "./constants";
import api from "../../../../utils/apiUtilsTinh";

export const actFetchTypeJobs = () => {
  return (dispatch) => {
    //request
    dispatch(actTypeJobsRequest());

    //call api
    api
      .get("api/type-jobs") // a` oong ko co thieu
      .then((result) => {
        dispatch(actTypeJobsSuccess(result.data));
      })
      .catch((error) => {
        dispatch(actTypeJobsFailed(error));
      });
  };
};

const actTypeJobsRequest = () => {
  return {
    type: ActionType.TYPE_JOBS_REQUEST,
  };
};

const actTypeJobsSuccess = (data) => {
  return {
    type: ActionType.TYPE_JOBS_SUCCESS,
    payload: data,
  };
};

const actTypeJobsFailed = (error) => {
  return {
    type: ActionType.TYPE_JOBS_FAILED,
    payload: error,
  };
};
