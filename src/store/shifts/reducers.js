import produce from "immer";

import {
   SET_SHIFTS,
   SET_CURRENT_SHIFT,
   ADD_SHIFT,
   REMOVE_SHIFT
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
   } else if (action.type === ADD_SHIFT) {
      draftState.shiftsList.push(action.payload)
   } else if (action.type === REMOVE_SHIFT) {
      draftState.shiftsList = draftState.shiftsList.filter(obj => obj.id !== action.payload.toString())
   }
}, initialState)