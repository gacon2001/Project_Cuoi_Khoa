import * as ActionType from "./constants";

const initialState = {
  loading: false,
  listSubTypeJobs: [],
  error: null,
};

const fetchListSubTypeJobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FETCH_LIST_SUBTYPE_JOBS_REQUEST:
      state.loading = true;
      state.listSubTypeJobs = null;
      state.error = null;
      return { ...state };
    case ActionType.FETCH_LIST_SUBTYPE_JOBS_SUCCESS:
      state.loading = false;
      state.listSubTypeJobs = action.payload;
      state.error = null;
      return { ...state };
    case ActionType.FETCH_LIST_SUBTYPE_JOBS_FAILED:
      state.loading = false;
      state.listSubTypeJobs = null;
      state.error = action.payload;
      return { ...state };


    default:
      return { ...state };
  }
};

export default fetchListSubTypeJobsReducer;
