import { combineReducers } from "redux";
import { workersListReducer } from "./workersList/reducers";
import { pagesListReducer } from "./pagesList/reducers";
import { techniquesListReducer } from "./techniquesList/reducers";
import { modalsReducer } from "./modals/reducers";

export default combineReducers({
   workersListVault: workersListReducer,
   pagesListVault: pagesListReducer,
   techniquesListVault: techniquesListReducer,
   modalsVault: modalsReducer,
})