import * as ActionType from "./constants";

const initialState = {
  loading: false,
  listBookingJobs: [],
  error: null,
  detailUserBooking: null,
};

const fetchlistBookingJobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FETCH_LIST_BOOKING_JOBS_REQUEST:
      state.loading = true;
      state.listBookingJobs = null;
      state.error = null;
      return { ...state };
    case ActionType.FETCH_LIST_BOOKING_JOBS_SUCCESS:
      state.loading = false;
      state.listBookingJobs = action.payload;
      state.error = null;
      return { ...state };
    case ActionType.FETCH_LIST_BOOKING_JOBS_FAILED:
      state.loading = false;
      state.listBookingJobs = null;
      state.error = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default fetchlistBookingJobsReducer;
