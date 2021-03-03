import { combineReducers } from "redux";
import { workersListReducer } from "./workersList/reducers";
import { sortReducer } from "./workersList/sortColumns/reducers";

export default combineReducers({
   workersListVault: workersListReducer,
   sortColumnsReducer: sortReducer,
})