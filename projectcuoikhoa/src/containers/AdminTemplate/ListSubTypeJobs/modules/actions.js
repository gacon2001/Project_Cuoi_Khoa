import api from "utils/apiUtils";
import * as ActionType from "./constants";

export const actFetchListSubTypeJobsApi = (IDsubType) => {
  return (dispatch) => {
    dispatch(actListSubTypeJobsRequest());
    api
      .get(`jobs/by-sub-type?subType=${IDsubType}&skip=0&llimit=10`)
      .then((success) => {
        dispatch(actListSubTypeJobsSuccess(success.data));
      })
      .catch((error) => {
        dispatch(actListSubTypeJobsFailed(error));
      });
  };
};
const actListSubTypeJobsRequest = () => {
  return {
    type: ActionType.FETCH_LIST_SUBTYPE_JOBS_REQUEST,
  };
};
const actListSubTypeJobsSuccess = (data) => {
  return {
    type: ActionType.FETCH_LIST_SUBTYPE_JOBS_SUCCESS,
    payload: data,
  };
};
const actListSubTypeJobsFailed = (error) => {
  return {
    type: ActionType.FETCH_LIST_SUBTYPE_JOBS_FAILED,
    payload: error,
  };
};
