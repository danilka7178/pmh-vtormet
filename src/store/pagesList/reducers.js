import produce from "immer";

import { SET_CURRENT_PAGE } from "./actions";

const initialState = {
   currentPage: "",
}

export const pagesListReducer = produce((draftState, action) => {
   if (action.type === SET_CURRENT_PAGE) {
      draftState.currentPage = action.payload
   }
}, initialState)