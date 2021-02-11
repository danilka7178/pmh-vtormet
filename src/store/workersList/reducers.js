import { SET_DATA } from "./actions";

const initialState = {};

export const workersListReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_DATA:
         return ({
            ...state,
            workersList: action.payload,
         })
      default: return state
   }
}