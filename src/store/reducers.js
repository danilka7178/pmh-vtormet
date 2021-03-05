import { combineReducers } from "redux";
import { workersListReducer } from "./workersList/reducers";
import { pagesListReducer } from "./pagesList/reducers";

export default combineReducers({
   workersListVault: workersListReducer,
   pagesListVault: pagesListReducer,
})