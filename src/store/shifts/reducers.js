import produce from "immer";

import {
   SET_SHIFTS,
   SET_CURRENT_SHIFT
} from "./actions";

const initialState = {
   shiftsList: [],
   currentShift: {
   },
}

export const shiftsReducer = produce((draftState, action) => {
   if (action.type === SET_SHIFTS) {
      draftState.shiftsList = action.payload
   } else if (action.type === SET_CURRENT_SHIFT) {
      draftState.currentShift = action.payload
   }
}, initialState)