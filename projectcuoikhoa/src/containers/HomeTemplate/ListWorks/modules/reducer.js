import * as ActionType from "./constants";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const listWorksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LIST_WORKS_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };

    case ActionType.LIST_WORKS_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };

    case ActionType.LIST_WORKS_FAILED:
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default listWorksReducer;




