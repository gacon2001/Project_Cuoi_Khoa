import api from "utils/apiUtils";
import * as ActionType from "./constants";

export const actFetchListBookingJobsApi = (_id) => {
    return (dispatch) => {
        dispatch(actFetchListBookingJobsRequest());
        api.get(`jobs/${_id}`)
        .then((success)=>{
            dispatch(actFetchListBookingJobsSuccess(success.data));
        })
        .catch((error)=>{
            dispatch(actFetchListBookingJobsFailed(error));
        })
    }
} 
const actFetchListBookingJobsRequest = ()=>{
    return {
        type: ActionType.FETCH_LIST_BOOKING_JOBS_REQUEST
    }
}
const actFetchListBookingJobsSuccess = (data) => {
return {
    type: ActionType.FETCH_LIST_BOOKING_JOBS_SUCCESS,
    payload: data,
}
}
const actFetchListBookingJobsFailed = (error) => {
    return{
        type: ActionType.FETCH_LIST_BOOKING_JOBS_FAILED,
        payload: error,
    }
}

