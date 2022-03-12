import * as ActionType from "./constants";

const initialState = {
  loading: false,
  listJobs: [],
  error: null,
  data: "",
};

const fetchListJobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FETCH_LIST_JOBS_REQUEST:
      state.loading = true;
      state.listJobs = null;
      state.error = null;
      return { ...state };
    case ActionType.FETCH_LIST_JOBS_SUCCESS:
      state.loading = false;
      state.listJobs = action.payload;
      state.error = null;
      return { ...state };
    case ActionType.FETCH_LIST_JOBS_FAILED:
      state.loading = false;
      state.listJobs = null;
      state.error = action.payload;
      return { ...state };

    case ActionType.SEARCH_JOBS_REQUEST: {
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };
    }

    case ActionType.SEARCH_JOBS_SUCCESS: {
      state.loading = false;
      state.listJobs = action.payload;
      state.error = null;
      return { ...state };
    }
    case ActionType.SEARCH_JOBS_FAILED: {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };
    }

    case ActionType.DELETE_JOBS_REQUEST:
      state.loading = true;
      state.error = null;
      return { ...state };
    case ActionType.DELETE_JOBS_SUCCESS: {
      let listJobs = { ...state.listJobs };
      const index = state.listJobs.findIndex((jobs) => {
        return jobs._id === action.payload;
      });
      if (index != -1) {
        listJobs.splice(index, 1);
        state.listJobs = listJobs;
      }
      return { ...state };
    }
    case ActionType.DELETE_JOBS_FAILED:
      state.loading = false;
      state.error = action.payload;
      return { ...state };

      case ActionType.BOOKING_JOBS_REQUEST: {
        state.loading = true;
        state.data = null;
        state.error = null;
        return { ...state };
      }
  
      case ActionType.BOOKING_JOBS_SUCCESS: {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
        return { ...state };
      }
      case ActionType.BOOKING_JOBS_FAILED: {
        state.loading = false;
        state.data = null;
        state.error = action.payload;
        return { ...state };
      } 

    default:
      return { ...state };
  }
};

export default fetchListJobsReducer;
