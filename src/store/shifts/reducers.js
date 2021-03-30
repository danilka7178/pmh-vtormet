import produce from "immer";

import {
   SET_SHIFTS, SET_CURRENT_SHIFT, ADD_SHIFT,
   REMOVE_SHIFT, ADD_LIST, SET_CURRENT_LIST,
   DELETE_LIST, SET_PLOT, SET_DATE,
   SET_TIME_START, SET_TIME_END,
   SET_DRIVER_NAME, SET_DRIVER_UNIQ_NUMB,
   SET_DRIVER_LICENSE, SET_CAR_NAME,
   SET_CAR_UNIQ_NUMB, SET_CAR_STATE_NUMB
} from "./actions";

const initialState = {
   shiftsList: [],
   currentShift: {
      shift: [],
   },
   currentList: {
      id: "",
      date: new Date().toISOString().slice(0, 10),
      place: "",
      timeStart: "08:00",
      timeEnd: "20:00",
      driver: {
         name: "",
         uniqNumber: "",
         licence: "",
      },
      car: {
         name: "",
         uniqNumber: "",
         stateNumber: "",
      },
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
   } else if (action.type === SET_PLOT) {
      draftState.currentList.place = action.payload
   } else if (action.type === SET_DATE) {
      draftState.currentList.date = action.payload
   } else if (action.type === SET_TIME_START) {
      draftState.currentList.timeStart = action.payload
   } else if (action.type === SET_TIME_END) {
      draftState.currentList.timeEnd = action.payload
   } else if (action.type === SET_DRIVER_NAME) {
      draftState.currentList.driver.name = action.payload
   } else if (action.type === SET_DRIVER_UNIQ_NUMB) {
      draftState.currentList.driver.uniqNumber = action.payload
   } else if (action.type === SET_DRIVER_LICENSE) {
      draftState.currentList.driver.licence = action.payload
   } else if (action.type === SET_CAR_NAME) {
      draftState.currentList.car.name = action.payload
   } else if (action.type === SET_CAR_UNIQ_NUMB) {
      draftState.currentList.car.uniqNumber = action.payload
   } else if (action.type === SET_CAR_STATE_NUMB) {
      draftState.currentList.car.stateNumber = action.payload
   }
}, initialState)