import produce from "immer";

import {
   SET_SHIFTS,
   SET_CURRENT_SHIFT,
   ADD_SHIFT,
   REMOVE_SHIFT,
   ADD_LIST,
   SET_CURRENT_LIST,
   DELETE_LIST
} from "./actions";

const initialState = {
   shiftsList: [],
   currentShift: {
      shift: [],
   },
   currentList: {
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
   } else if (action.type === ADD_LIST) {
      draftState.currentShift.shift.push(action.payload)
   } else if (action.type === SET_CURRENT_LIST) {
      draftState.currentList = action.payload
   } else if (action.type === DELETE_LIST) {
      draftState.currentShift.shift = draftState.currentShift.shift.filter(obj => +obj.id !== +action.payload)
   }
}, initialState)