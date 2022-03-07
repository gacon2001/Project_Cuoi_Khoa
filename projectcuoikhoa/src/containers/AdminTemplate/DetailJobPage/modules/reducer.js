import * as ActionType from "./constants";

const initialState = {
  loading: false,
  detailJobs: null,
  error: null,
  data: null,
};

const detailJobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.DETAIL_JOBS_REQUEST:
      state.loading = true;
      state.detailJobs = null;
      state.error = null;
      return { ...state };
    case ActionType.DETAIL_JOBS_SUCCESS:
      state.loading = false;
      state.detailJobs = action.payload;
      state.error = null;
      return { ...state };
    case ActionType.DETAIL_JOBS_FAILED:
      state.loading = false;
      state.detailJobs = null;
      state.error = action.payload;
      return { ...state };

      case ActionType.BOOKING_THIS_JOBS_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };
    case ActionType.BOOKING_THIS_JOBS_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };
    case ActionType.BOOKING_THIS_JOBS_FAILED:
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };


    default:
      return { ...state };
  }
};

export default detailJobsReducer;
