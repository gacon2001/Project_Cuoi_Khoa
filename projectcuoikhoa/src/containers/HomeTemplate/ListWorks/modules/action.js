import * as ActionType from "./constants";
import api from "./../../../../utils/apiUtilsTinh";

export const actListworksApi = (type) => {
  //cai type ak ong
  //de do dung hk ong

  return (dispatch) => {
    dispatch(actListworksRequest());
    api
      .get(`api/jobs/by-name?name=${type}`)
      .then((result) => {
        dispatch(actListworksSuccess(result.data));
      })
      .catch((error) => {
        dispatch(actListworksFailed(error));
      });
  };
};

const actListworksRequest = () => {
  return {
    type: ActionType.LIST_WORKS_REQUEST,
  };
};

const actListworksSuccess = (data) => {
  return {
    type: ActionType.LIST_WORKS_SUCCESS,
    payload: data,
  };
};

const actListworksFailed = (error) => {
  return {
    type: ActionType.LIST_WORKS_FAILED,
    payload: error,
  };
};
