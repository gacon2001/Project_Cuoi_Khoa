import * as ActionType from "./constants";

const initialState = {
  loading: false,
  data: null,
  error: null,
  skill: "",
  certification: "",
  editProfile: "",
  detailAdmin: null,
};

const uploadAvatarReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.UPLOAD_AVATAR_REQUEST: {
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };
    }

    case ActionType.UPLOAD_AVATAR_SUCCESS: {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };
    }
    case ActionType.UPLOAD_AVATAR_FAILED: {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };
    }

    case ActionType.FETCH_DETAIL_ADMIN_LOGIN_REQUEST: {
      state.loading = true;
      state.detailAdmin = null;
      state.error = null;
      return { ...state };
    }

    case ActionType.FETCH_DETAIL_ADMIN_LOGIN_SUCCESS: {
      state.loading = false;
      state.detailAdmin = action.payload;
      state.error = null;
      return { ...state };
    }
    case ActionType.FETCH_DETAIL_ADMIN_LOGIN_FAILED: {
      state.loading = false;
      state.detailAdmin = null;
      state.error = action.payload;
      return { ...state };
    }

    case ActionType.ADD_SKILLS_REQUEST: {
        state.loading = true;
        state.skill = null;
        state.error = null;
        return { ...state };
      }
  
      case ActionType.ADD_SKILLS_SUCCESS: {
        state.loading = false;
        state.skill = action.payload;
        state.error = null;
        return { ...state };
      }
      case ActionType.ADD_SKILLS_FAILED: {
        state.loading = false;
        state.skill = null;
        state.error = action.payload;
        return { ...state };
      }

      case ActionType.ADD_CERTIFICATIONS_REQUEST: {
        state.loading = true;
        state.certification = null;
        state.error = null;
        return { ...state };
      }
  
      case ActionType.ADD_CERTIFICATIONS_SUCCESS: {
        state.loading = false;
        state.certification = action.payload;
        state.error = null;
        return { ...state };
      }
      case ActionType.ADD_CERTIFICATIONS_FAILED: {
        state.loading = false;
        state.certification = null;
        state.error = action.payload;
        return { ...state };
      }

    default:
      return { ...state };
  }
};

export default uploadAvatarReducer;
