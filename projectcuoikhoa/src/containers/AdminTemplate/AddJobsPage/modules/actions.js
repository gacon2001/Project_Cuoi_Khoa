import { get } from "jquery";
import api from "utils/apiUtils";
import * as ActionType from "./constants";

export const actAddJobsApi = (jobs) => {
  return (dispatch) => {
    dispatch(actAddJobsRequest());
    api
      .post("jobs", jobs)
      .then((success, checked) => {
        // disabled
        if (checked === "type") {
          dispatch(actAddJobsSuccess(success.data));
          alert("Add New Job Successfully");
        } else{
          document.getElementById("btnType").disabled  = true;
          dispatch(actAddJobsSuccess(success.data));
          alert("Add New Job Successfully");
        }
      })
      .catch((error) => {
        dispatch(actAddJobsFailed(error));
      });
  };
};
const actAddJobsRequest = () => {
  return {
    type: ActionType.ADD_JOBS_REQUEST,
  };
};
const actAddJobsSuccess = (data) => {
  return {
    type: ActionType.ADD_JOBS_SUCCESS,
    payload: data,
  };
};
const actAddJobsFailed = (error) => {
  return {
    type: ActionType.ADD_JOBS_FAILED,
    payload: error,
  };
};
