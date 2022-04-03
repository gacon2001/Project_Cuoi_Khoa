import {combineReducers} from "redux";
import typeJobsReducer from "../containers/HomeTemplate/Typejobs/modules/reducer";
import listWorksReducer from "../containers/HomeTemplate/ListWorks/modules/reducer";
import subtypejobsReducer from "../containers/HomeTemplate/Typejobs/SubTypeJobs/modules/reducer";
const rootReducer = combineReducers({
  listWorksReducer,
  typeJobsReducer,
  subtypejobsReducer,
})

export default rootReducer;