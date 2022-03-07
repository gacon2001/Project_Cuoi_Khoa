import api from "utils/apiUtils";
import * as ActionType from "./constants";

export const actDetailJobsApi = (_id) => {
    return (dispatch) => {
        dispatch(actDetailJobsRequest());
        api.get(`jobs/${_id}`)
        .then((success)=>{
            dispatch(actDetailJobsSuccess(success.data));
        })
        .catch((error)=>{
            dispatch(actDetailJobsFailed(error));
        })
    }
} 
const actDetailJobsRequest = ()=>{
    return {
        type: ActionType.DETAIL_JOBS_REQUEST
    }
}
const actDetailJobsSuccess = (data) => {
return {
    type: ActionType.DETAIL_JOBS_SUCCESS,
    payload: data,
}
}
const actDetailJobsFailed = (error) => {
    return{
        type: ActionType.DETAIL_JOBS_FAILED,
        payload: error,
    }
}

export const actBookingThisJobsApi = (_id) => {
    return (dispatch) => {
        dispatch(actBookingThisJobsRequest());
        api.patch(`jobs/booking/${_id}`)
        .then((success)=>{
            dispatch(actBookingThisJobsSuccess(success.data));
        })
        .catch((error)=>{
            dispatch(actBookingThisJobsFailed(error));
        })
    }
} 
const actBookingThisJobsRequest = ()=>{
    return {
        type: ActionType.BOOKING_THIS_JOBS_REQUEST
    }
}
const actBookingThisJobsSuccess = (data) => {
return {
    type: ActionType.BOOKING_THIS_JOBS_SUCCESS,
    payload: data,
}
}
const actBookingThisJobsFailed = (error) => {
    return{
        type: ActionType.BOOKING_THIS_JOBS_FAILED,
        payload: error,
    }
}

