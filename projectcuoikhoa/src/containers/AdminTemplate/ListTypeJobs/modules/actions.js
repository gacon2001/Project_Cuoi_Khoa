import api from "utils/apiUtils";
import * as ActionType from "./constants";

export const actFetchListTypeJobsApi = (IDType) => {
  return (dispatch) => {
    dispatch(actListTypeJobsRequest());
    api
      .get(`jobs/by-type?type =${IDType}&skip =0`)
      .then((success) => {
        // console.log(123);
        dispatch(actListTypeJobsSuccess(success.data));
      })
      .catch((error) => {
        dispatch(actListTypeJobsFailed(error));
      });
  };
};
const actListTypeJobsRequest = () => {
  return {
    type: ActionType.FETCH_LIST_TYPE_JOBS_REQUEST,
  };
};
const actListTypeJobsSuccess = (data) => {
  return {
    type: ActionType.FETCH_LIST_TYPE_JOBS_SUCCESS,
    payload: data,
  };
};
const actListTypeJobsFailed = (error) => {
  return {
    type: ActionType.FETCH_LIST_TYPE_JOBS_FAILED,
    payload: error,
  };
};
