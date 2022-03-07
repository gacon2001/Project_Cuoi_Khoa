import api from "utils/apiUtils";
import * as ActionType from "./constants";

export const actEditJobsApi = (_id) => {
    return (dispatch) => {
        dispatch(actEditJobsRequest());
        api.put(`jobs/${_id}`)
        .then((success)=>{
            dispatch(actEditJobsSuccess(success.data));
        })
        .catch((error)=>{
            dispatch(actEditJobsFailed(error));
        })
    }
} 
const actEditJobsRequest = ()=>{
    return {
        type: ActionType.EDIT_JOBS_REQUEST
    }
}
const actEditJobsSuccess = (data) => {
return {
    type: ActionType.EDIT_JOBS_SUCCESS,
    payload: data,
}
}
const actEditJobsFailed = (error) => {
    return{
        type: ActionType.EDIT_JOBS_FAILED,
        payload: error,
    }
}

export const actFetchDetailJobsApi = (_id) => {
    return (dispatch) => {
        dispatch(actFetchDetailJobsRequest());
        api.get(`jobs/${_id}`)
        .then((success)=>{
            dispatch(actFetchDetailJobsSuccess(success.data));
        })
        .catch((error)=>{
            dispatch(actFetchDetailJobsFailed(error));
        })
    }
} 
const actFetchDetailJobsRequest = ()=>{
    return {
        type: ActionType.FETCH_DETAIL_JOBS_REQUEST
    }
}
const actFetchDetailJobsSuccess = (data) => {
return {
    type: ActionType.FETCH_DETAIL_JOBS_SUCCESS,
    payload: data,
}
}
const actFetchDetailJobsFailed = (error) => {
    return{
        type: ActionType.FETCH_DETAIL_JOBS_FAILED,
        payload: error,
    }
}