import * as ActionType from "./constants";
import api from "utils/apiUtils";

export const actEditProfileApi = (_id) => {
    return (dispatch) => {
        dispatch(actEditProfileRequest());
        api.put(`users/${_id}`)
        .then((success)=>{
            dispatch(actEditProfileSuccess(success.data))
            ;
            alert("Update Profile Successfully");
        })
        .catch((error)=>{
            dispatch(actEditProfileFailed(error));
            alert("Failed");
        })
    }
} 
const actEditProfileRequest = ()=>{
    return {
        type: ActionType.EDIT_PROFILE_REQUEST
    }
}
const actEditProfileSuccess = (data) => {
return {
    type: ActionType.EDIT_PROFILE_SUCCESS,
    payload: data,
}
}
const actEditProfileFailed = (error) => {
    return{
        type: ActionType.EDIT_PROFILE_FAILED,
        payload: error,
    }
}



export const actFetchDetailProfileApi = (_id) => {
    return (dispatch) => {
        dispatch(actFetchDetailProfileRequest());
        api.get(`users/${_id}`)
        .then((success)=>{
            dispatch(actFetchDetailProfileSuccess(success.data));
        })
        .catch((error)=>{
            console.log(123);
            dispatch(actFetchDetailProfileFailed(error));
        })
    }
} 
const actFetchDetailProfileRequest = ()=>{
    return {
        type: ActionType.FETCH_DETAIL_PROFILE_REQUEST
    }
}
const actFetchDetailProfileSuccess = (data) => {
return {
    type: ActionType.FETCH_DETAIL_USER_SUCCESS,
    payload: data,
}
}
const actFetchDetailProfileFailed = (error) => {
    return{
        type: ActionType.FETCH_DETAIL_USER_FAILED,
        payload: error,
    }
}