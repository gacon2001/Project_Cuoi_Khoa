import * as ActionType from "./constants";
import api from "utils/apiUtils";

export const actEditUserApi = (_id, userUpdate) => {
    return (dispatch) => {
        dispatch(actEditUserRequest());
        api.put(`users/${_id}`, userUpdate) // chỗ edit này phải cung cấp thông tin mới cho api chứ nhỉ, nhớ truyền tham số thứ 2 cho put là cái object user mới update nha
        .then((success)=>{
            console.log(123);
            dispatch(actEditUserSuccess(success.data));
            alert("Edit Successfully");
        })
        .catch((error)=>{
            console.log(234);
            dispatch(actEditUserFailed(error));
            alert("'Failed");
        })
    }
} 
const actEditUserRequest = ()=>{
    return {
        type: ActionType.EDIT_USER_REQUEST
    }
}
const actEditUserSuccess = (data) => {
return {
    type: ActionType.EDIT_USER_SUCCESS,
    payload: data,
}
}
const actEditUserFailed = (error) => {
    return{
        type: ActionType.EDIT_USER_FAILED,
        payload: error,
    }
}

export const actFetchDetailUserApi = (_id) => {
    return (dispatch) => {
        dispatch(actFetchDetailUserRequest());
        api.get(`users/${_id}`)
        .then((success)=>{
            dispatch(actFetchDetailUserSuccess(success.data));
        })
        .catch((error)=>{
            dispatch(actFetchDetailUserFailed(error));
        })
    }
} 
const actFetchDetailUserRequest = ()=>{
    return {
        type: ActionType.FETCH_DETAIL_USER_REQUEST
    }
}
const actFetchDetailUserSuccess = (data) => {
return {
    type: ActionType.FETCH_DETAIL_USER_SUCCESS,
    payload: data,
}
}
const actFetchDetailUserFailed = (error) => {
    return{
        type: ActionType.FETCH_DETAIL_USER_FAILED,
        payload: error,
    }
}