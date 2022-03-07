import api from "utils/apiUtils";
import * as ActionType from "./constants";

export const actFetchListUserApi = () => {
    return (dispatch) => {
        dispatch(actFetchListUserRequest());
        api.get("users?skip=0")
        .then((success)=>{
            dispatch(actFetchListUserSuccess(success.data));
        })
        .catch((error)=>{
            dispatch(actFetchListUserFailed(error));
        })
    }
} 
const actFetchListUserRequest = ()=>{
    return {
        type: ActionType.FETCH_LIST_USER_REQUEST
    }
}
const actFetchListUserSuccess = (data) => {
return {
    type: ActionType.FETCH_LIST_USER_SUCCESS,
    payload: data,
}
}
const actFetchListUserFailed = (error) => {
    return{
        type: ActionType.FETCH_LIST_USER_FAILED,
        payload: error,
    }
}

export const actDeleteUserApi = (_id) => {
    return (dispatch) => {
        dispatch(actDeleteUserRequest());
        api.delete(`users/${_id}`)
        .then((success)=>{
            dispatch(actDeleteUserSuccess(success.data));
        })
        .catch((error)=>{
            console.log(error);
            dispatch(actDeleteUserFailed(error));
        })
    }
} 
const actDeleteUserRequest = ()=>{
    return {
        type: ActionType.DELETE_USER_REQUEST
    }
}
const actDeleteUserSuccess = (data) => {
return {
    type: ActionType.DELETE_USER_SUCCESS,
    payload: data,
}
}
const actDeleteUserFailed = (error) => {
    return{
        type: ActionType.DELETE_USER_FAILED,
        payload: error,
    }
}

export const actSearchUserApi = (tuKhoa) => {
    return (dispatch) => {
        dispatch(actSearchUserRequest());
        api.get(`users/pagination-search?name=${tuKhoa}&skip=0`)
        .then((success)=>{
            dispatch(actSearchUserSuccess(success.data));
        })
        .catch((error)=>{
            dispatch(actSearchUserFailed(error));
        })
    }
} 
const actSearchUserRequest = ()=>{
    return {
        type: ActionType.SEARCH_USER_REQUEST
    }
}
const actSearchUserSuccess = (data) => {
return {
    type: ActionType.SEARCH_USER_SUCCESS,
    payload: data,
}
}
const actSearchUserFailed = (error) => {
    return{
        type: ActionType.SEARCH_USER_FAILED,
        payload: error,
    }
}