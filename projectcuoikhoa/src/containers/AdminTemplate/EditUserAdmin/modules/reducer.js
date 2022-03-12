import * as ActionType from "./constants";

const initialState = {
  loading: false,
  // data: null,
  error: null,
  editUser: "",
  detailUser: "", // chỗ này mới đầu set null là hông báo lỗi òi
};

//dùng chung 1 data có đc hay ko??
const editUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.EDIT_USER_REQUEST: {
      state.loading = true;
      state.editUser = null;
      state.error = null;
      return { ...state };
    }

    case ActionType.EDIT_USER_SUCCESS: {
      state.loading = false;
      state.editUser = action.payload;//update lên list thì đây mình phải là listUser hả H, khoan cái editUser success đâu cần phải update listUser đâu ta, tại 2 trang khác nhau mà, khi update xong => nếu ng dùng chuyển trang thì cái trang lits-ủsẻ có fetch lại danh sách rồi nên khỏi update lại list-ủe trong edit này // mà sao tui thấy cái edit nó ko ăn nhỉ
      state.error = null;
      return { ...state };
    }
    case ActionType.EDIT_USER_FAILED: {
      state.loading = false;
      state.editUser = null;
      state.error = action.payload;
      return { ...state };
    }

    case ActionType.FETCH_DETAIL_USER_REQUEST: {
      state.loading = true;
      state.detailUser = null;
      state.error = null;
      return { ...state };
    }

    case ActionType.FETCH_DETAIL_USER_SUCCESS: {
      state.loading = false;
      state.detailUser = action.payload;
      state.error = null;
      return { ...state };
    }
    case ActionType.FETCH_DETAIL_USER_FAILED: {
      state.loading = false;
      state.detailUser = null;
      state.error = action.payload;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default editUserReducer;
