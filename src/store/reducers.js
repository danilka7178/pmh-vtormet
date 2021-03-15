import { combineReducers } from "redux";
import { workersListReducer } from "./workersList/reducers";
import { pagesListReducer } from "./pagesList/reducers";
import { techniquesListReducer } from "./techniquesList/reducers";

export default combineReducers({
   workersListVault: workersListReducer,
   pagesListVault: pagesListReducer,
   techniquesListVault: techniquesListReducer,
})