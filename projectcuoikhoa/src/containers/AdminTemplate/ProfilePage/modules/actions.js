import api from "utils/apiUtils";
import * as ActionType from "./constants";

export const actFetchDetailAdminLoginApi = (_id) => {
  return (dispatch) => {
      dispatch(actFetchDetailAdminLoginRequest());
      api.get(`users/${_id}`)
      .then((success)=>{
          dispatch(actFetchDetailAdminLoginSuccess(success.data));
      })
      .catch((error)=>{
          dispatch(actFetchDetailAdminLoginFailed(error));
      })
  }
} 
const actFetchDetailAdminLoginRequest = ()=>{
  return {
      type: ActionType.FETCH_DETAIL_ADMIN_LOGIN_REQUEST
  }
}
const actFetchDetailAdminLoginSuccess = (data) => {
return {
  type: ActionType.FETCH_DETAIL_ADMIN_LOGIN_SUCCESS,
  payload: data,
}
}
const actFetchDetailAdminLoginFailed = (error) => {
  return{
      type: ActionType.FETCH_DETAIL_ADMIN_LOGIN_FAILED,
      payload: error,
  }
}

export const actAddSkillsApi = (_id) => {
    return (dispatch) => {
        dispatch(actAddSkillsRequest());
        api.put(`users/${_id}`)
        .then((success)=>{
            dispatch(actAddSkillsSuccess(success.data));
        })
        .catch((error)=>{
            dispatch(actAddSkillsFailed(error));
        })
    }
} 
const actAddSkillsRequest = ()=>{
    return {
        type: ActionType.ADD_SKILLS_REQUEST
    }
}
const actAddSkillsSuccess = (data) => {
return {
    type: ActionType.ADD_SKILLS_SUCCESS,
    payload: data,
}
}
const actAddSkillsFailed = (error) => {
    return{
        type: ActionType.ADD_SKILLS_FAILED,
        payload: error,
    }
}

export const actAddCertificationsApi = (_id) => {
    return (dispatch) => {
        dispatch(actAddCertificationsRequest());
        api.put(`users/${_id}`)
        .then((success)=>{
            dispatch(actAddCertificationsSuccess(success.data));
        })
        .catch((error)=>{
            dispatch(actAddCertificationsFailed(error));
        })
    }
} 
const actAddCertificationsRequest = ()=>{
    return {
        type: ActionType.ADD_CERTIFICATIONS_REQUEST
    }
}
const actAddCertificationsSuccess = (data) => {
return {
    type: ActionType.ADD_CERTIFICATIONS_SUCCESS,
    payload: data,
}
}
const actAddCertificationsFailed = (error) => {
    return{
        type: ActionType.ADD_CERTIFICATIONS_FAILED,
        payload: error,
    }
}



