import * as ActionType from "./constants";

const initialState = {
  loading: false,
  listTypeJobs: [],
  error: null,
};

const fetchListTypeJobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FETCH_LIST_TYPE_JOBS_REQUEST:
      state.loading = true;
      state.listTypeJobs = null;
      state.error = null;
      return { ...state };
    case ActionType.FETCH_LIST_TYPE_JOBS_SUCCESS:
      state.loading = false;
      state.listTypeJobs = action.payload;
      state.error = null;
      return { ...state };
    case ActionType.FETCH_LIST_TYPE_JOBS_FAILED:
      state.loading = false;
      state.listTypeJobs = null;
      state.error = action.payload;
      return { ...state };


    default:
      return { ...state };
  }
};

export default fetchListTypeJobsReducer;
