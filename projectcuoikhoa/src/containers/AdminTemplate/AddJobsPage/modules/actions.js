import { get } from "jquery";
import api from "utils/apiUtils";
import * as ActionType from "./constants";

export const actAddJobsApi = (jobs) => {
  return (dispatch) => {
    dispatch(actAddJobsRequest());
    api
      .post("jobs", jobs)
      .then((success) => {
          dispatch(actAddJobsSuccess(success.data));
          alert("Add New Job Successfully");
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

export const actFetchListTypeJobsApi = () => {
  return (dispatch) => {
    dispatch(actFetchListTypeJobsRequest());
    api
      .get("type-jobs")
      .then((success) => {
        dispatch(actFetchListTypeJobsSuccess(success.data));
        // alert("Add Jobs Successfully")
      })
      .catch((error) => {
        dispatch(actFetchListTypeJobsFailed(error));
        alert("Failed");
      });
  };
};
const actFetchListTypeJobsRequest = () => {
  return {
    type: ActionType.FETCH_LIST_TYPE_JOBS_REQUEST,
  };
};
const actFetchListTypeJobsSuccess = (data) => {
  return {
    type: ActionType.FETCH_LIST_TYPE_JOBS_SUCCESS,
    payload: data,
  };
};
const actFetchListTypeJobsFailed = (error) => {
  return {
    type: ActionType.FETCH_LIST_TYPE_JOBS_FAILED,
    payload: error,
  };
};

export const actFetchListSubTypeJobsApi = () => {
  return (dispatch) => {
      dispatch(actFetchListSubTypeJobsRequest());
      api.get("sub-type-jobs")
      .then((success)=>{
          dispatch(actFetchListSubTypeJobsSuccess(success.data));
      })
      .catch((error)=>{
          dispatch(actFetchListSubTypeJobsFailed(error));
      })
  }
} 
const actFetchListSubTypeJobsRequest = ()=>{
  return {
      type: ActionType.FETCH_LIST_SUBTYPE_JOBS_REQUEST
  }
}
const actFetchListSubTypeJobsSuccess = (data) => {
return {
  type: ActionType.FETCH_LIST_SUBTYPE_JOBS_SUCCESS,
  payload: data,
}
}
const actFetchListSubTypeJobsFailed = (error) => {
  return{
      type: ActionType.FETCH_LIST_SUBTYPE_JOBS_FAILED,
      payload: error,
  }
}
