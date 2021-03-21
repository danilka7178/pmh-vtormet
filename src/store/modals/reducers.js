import produce from "immer";

import {
   OPEN_MODAL,
   CLOSE_MODAL,
} from "./actions";

const initialState = {
   visibleModals: {
      visibleModalAddWorker: false,
      visibleModalEditWorker: false,
      visibleModalActionsTechniques: false,
      visibleModalEditingTechniques: false,
      visibleModalAddTechnique: false,
      visibleModalAddShift: false,
      visibleModalAddList: false,
      visibleModalEditList: false,
      visibleModalActionsList: false,
   }
};



export const modalsReducer = produce((draftState, action) => {
   if (action.type === OPEN_MODAL) {
      draftState.visibleModals = {
         [action.payload]: true
      }
   } else if (action.type === CLOSE_MODAL) {
      draftState.visibleModals = {
         [action.payload]: false,
      }
   }
}, initialState)