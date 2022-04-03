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


// export const actFetchDetailUserBookingApi = (_id) => {
//     return (dispatch) => {
//         dispatch(actFetchDetailUserBookingRequest());
//         api.get(`users/${_id}`)
//         .then((success)=>{
//             dispatch(actFetchDetailUserBookingSuccess(success.data));
//         })
//         .catch((error)=>{
//             dispatch(actFetchDetailUserBookingFailed(error));
//         })
//     }
// } 
// const actFetchDetailUserBookingRequest = ()=>{
//     return {
//         type: ActionType.FETCH_DETAIL_USER_BOOKING_REQUEST
//     }
// }
// const actFetchDetailUserBookingSuccess = (data) => {
// return {
//     type: ActionType.FETCH_DETAIL_USER_BOOKING_SUCCESS,
//     payload: data,
// }
// }
// const actFetchDetailUserBookingFailed = (error) => {
//     return{
//         type: ActionType.FETCH_DETAIL_USER_BOOKING_FAILED,
//         payload: error,
//     }
// }

