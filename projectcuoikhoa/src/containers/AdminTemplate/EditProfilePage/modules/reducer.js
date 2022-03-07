import * as ActionType from "./constants";

const initialState = {
  loading: false,
  data: null,
  error: null,
  editProfile: "",
};

const editProfileReducer = (state = initialState, action) => {
  switch (action.type) {
      case ActionType.EDIT_PROFILE_REQUEST: {
        state.loading = true;
        state.editProfile = null;
        state.error = null;
        return { ...state };
      }
  
      case ActionType.EDIT_PROFILE_SUCCESS: {
        state.loading = false;
        state.editProfile = action.payload;
        state.error = null;
        return { ...state };
      }
      case ActionType.EDIT_PROFILE_FAILED: {
        state.loading = false;
        state.editProfile = null;
        state.error = action.payload;
        return { ...state };
      }



      case ActionType.FETCH_DETAIL_PROFILE_REQUEST: {
        state.loading = true;
        state.data = null;
        state.error = null;
        return { ...state };
      }
  
      case ActionType.FETCH_DETAIL_USER_SUCCESS: {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
        return { ...state };
      }
      case ActionType.FETCH_DETAIL_USER_FAILED: {
        state.loading = false;
        state.data = null;
        state.error = action.payload;
        return { ...state };
      }

    default:
      return { ...state };
  }
};

export default editProfileReducer;
