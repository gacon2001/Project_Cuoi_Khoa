import { combineReducers } from "redux";

import editUserReducer from "containers/AdminTemplate/EditUserAdmin/modules/reducer";
import addUserReducer from "containers/AdminTemplate/AddUserAdmin/modules/reducer";
import fetchListUserReducer from "containers/AdminTemplate/ListUser/modules/reducer";
import signInReducer from "containers/AdminTemplate/SignInPage/modules/reducer";
import signupReducer from "containers/AdminTemplate/SignUpPage/modules/reducer";
import editProfileReducer from "containers/AdminTemplate/EditProfilePage/modules/reducer";
import fetchListJobsReducer from "containers/AdminTemplate/ListJobsPage/modules/reducer";
import detailJobsReducer from "containers/AdminTemplate/DetailJobPage/modules/reducer";
import addJobsReducer from "containers/AdminTemplate/AddJobsPage/modules/reducer";
import editJobsReducer from "containers/AdminTemplate/EditJobsPage/modules/reducer";
import fetchlistBookingJobsReducer from "containers/AdminTemplate/ListBookingJobs/modules/reducer";
import fetchListSubTypeJobsReducer from "containers/AdminTemplate/ListSubTypeJobs/modules/reducer";
import fetchListTypeJobsReducer from "containers/AdminTemplate/ListTypeJobs/modules/reducer";
import uploadAvatarReducer from "containers/AdminTemplate/DashboardPage/components/Avatar/modules/reducer";
import profilePageReducer from "containers/AdminTemplate/ProfilePage/modules/reducer";

const rootReducer = combineReducers({
  editUserReducer,
  addUserReducer,
  fetchListUserReducer,
  signInReducer,
  signupReducer,
  editProfileReducer,
  fetchListJobsReducer,
  detailJobsReducer,
  addJobsReducer,
  editJobsReducer,
  fetchlistBookingJobsReducer,
  fetchListSubTypeJobsReducer,
  fetchListTypeJobsReducer,
  uploadAvatarReducer,
  profilePageReducer,
});

export default rootReducer;
