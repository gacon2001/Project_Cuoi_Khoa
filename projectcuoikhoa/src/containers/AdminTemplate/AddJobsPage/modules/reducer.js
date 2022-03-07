import * as ActionType from "./constants";

const initialState = {
  loading: false,
  error: null,
  data: null,
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

    default:
      return { ...state };
  }
};

export default addJobsReducer;
