import { combineReducers } from "redux";
import { workersListReducer } from "./workersList/reducers";

export default combineReducers({
   workersListVault: workersListReducer,
})