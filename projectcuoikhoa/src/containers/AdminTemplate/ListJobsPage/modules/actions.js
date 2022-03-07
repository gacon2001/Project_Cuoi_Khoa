import api from "utils/apiUtils";
import * as ActionType from "./constants";

export const actFetchListJobsApi = () => {
    return (dispatch) => {
        dispatch(actFetchListJobsRequest());
        api.get("jobs?skip =0&limit =10")
        .then((success)=>{
            dispatch(actFetchListJobsSuccess(success.data));
        })
        .catch((error)=>{
            dispatch(actFetchListJobsFailed(error));
        })
    }
} 
const actFetchListJobsRequest = ()=>{
    return {
        type: ActionType.FETCH_LIST_JOBS_REQUEST
    }
}
const actFetchListJobsSuccess = (data) => {
return {
    type: ActionType.FETCH_LIST_JOBS_SUCCESS,
    payload: data,
}
}
const actFetchListJobsFailed = (error) => {
    return{
        type: ActionType.FETCH_LIST_JOBS_FAILED,
        payload: error,
    }
}

export const actSearchJobsApi = (tuKhoa) => {
    return (dispatch) => {
      dispatch(actSearchJobsRequest());
      api
        .get(`jobs/by-name?name=${tuKhoa}`)
        .then((success) => {
          dispatch(actSearchJobsSuccess(success.data));
        })
        .catch((error) => {
          dispatch(actSearchJobsFailed(error));
        });
    };
  };
  const actSearchJobsRequest = () => {
    return {
      type: ActionType.SEARCH_JOBS_REQUEST,
    };
  };
  const actSearchJobsSuccess = (data) => {
    return {
      type: ActionType.SEARCH_JOBS_SUCCESS,
      payload: data,
    };
  };
  const actSearchJobsFailed = (error) => {
    return {
      type: ActionType.SEARCH_JOBS_FAILED,
      payload: error,
    };
  };

  export const actDeleteJobsApi = (_id) => {
    return (dispatch) => {
        dispatch(actDeleteJobsRequest());
        api.delete(`jobs/${_id}`)
        .then((success)=>{
            dispatch(actDeleteJobsSuccess(success.data));
        })
        .catch((error)=>{
            console.log(error);
            dispatch(actDeleteJobsFailed(error));
        })
    }
} 
const actDeleteJobsRequest = ()=>{
    return {
        type: ActionType.DELETE_JOBS_REQUEST
    }
}
const actDeleteJobsSuccess = (data) => {
return {
    type: ActionType.DELETE_JOBS_SUCCESS,
    payload: data,
}
}
const actDeleteJobsFailed = (error) => {
    return{
        type: ActionType.DELETE_JOBS_FAILED,
        payload: error,
    }
}