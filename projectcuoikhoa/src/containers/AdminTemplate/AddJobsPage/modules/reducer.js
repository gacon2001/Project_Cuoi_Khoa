import * as ActionType from "./constants";

const initialState = {
  loading: false,
  error: null,
  data: null,
  listTypeJobs: [],
  listSubTypeJobs: [],
};

const addJobsReducer = (state = initialState, action) => {
  switch (action.type) {
      case ActionType.ADD_JOBS_REQUEST: {
        state.loading = true;
        state.data = null;
        state.error = null;
        return { ...state };
      }
  
      case ActionType.ADD_JOBS_SUCCESS: {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
        return { ...state };
      }
      case ActionType.ADD_JOBS_FAILED: {
        state.loading = false;
        state.data = null;
        state.error = action.payload;
        return { ...state };
      }

      case ActionType.FETCH_LIST_TYPE_JOBS_REQUEST: {
        state.loading = true;
        state.listTypeJobs = null;
        state.error = null;
        return { ...state };
      }
      case ActionType.FETCH_LIST_TYPE_JOBS_SUCCESS: {
        state.loading = false;
        state.listTypeJobs = action.payload;
        state.error = null;
        return { ...state };
      }
      case ActionType.FETCH_LIST_TYPE_JOBS_FAILED: {
        state.loading = false;
        state.listTypeJobs = null;
        state.error = action.payload;
        return { ...state };
      }

      case ActionType.FETCH_LIST_SUBTYPE_JOBS_REQUEST: {
        state.loading = true;
        state.listSubTypeJobs = null;
        state.error = null;
        return { ...state };
      }
      case ActionType.FETCH_LIST_SUBTYPE_JOBS_SUCCESS: {
        state.loading = false;
        state.listSubTypeJobs = action.payload;
        state.error = null;
        return { ...state };
      }
      case ActionType.FETCH_LIST_SUBTYPE_JOBS_FAILED: {
        state.loading = false;
        state.listSubTypeJobs = null;
        state.error = action.payload;
        return { ...state };
      }
    default:
      return { ...state };
  }
};

export default addJobsReducer;
