import produce from "immer";

import {
   SET_TECHNIQUES_LIST,
   SET_CURRENT_TECHNIQUE,
   SET_STATE_NUMBER_CURRENT_TECHNIQUE,
   SET_BRAND_CURRENT_TECHNIQUE,
   SET_INVENTORY_NUMBER_CURRENT_TECHNIQUE,
   SET_FUEL_CURRENT_TECHNIQUE,
   PUT_NEW_TECHNIQUE_TO_STORE,
   REMOVE_OLD_TECHNIQUE_FROM_STORE
} from "./actions";

const initialState = {
   currentTechnique: {
   },
}

export const techniquesListReducer = produce((draftState, action) => {
   if (action.type === SET_TECHNIQUES_LIST) {
      draftState.techniquesList = action.payload
   }
   else if (action.type === SET_CURRENT_TECHNIQUE) {
      draftState.currentTechnique = action.payload
   }
   else if (action.type === SET_STATE_NUMBER_CURRENT_TECHNIQUE) {
      draftState.currentTechnique.stateNumber = action.payload
   }
   else if (action.type === SET_BRAND_CURRENT_TECHNIQUE) {
      draftState.currentTechnique.brand = action.payload
   }
   else if (action.type === SET_INVENTORY_NUMBER_CURRENT_TECHNIQUE) {
      draftState.currentTechnique.inventoryNumber = action.payload
      draftState.currentTechnique.id = +draftState.techniquesList[draftState.techniquesList.length - 1].id + 1
   }
   else if (action.type === SET_FUEL_CURRENT_TECHNIQUE) {
      draftState.currentTechnique.fuel = action.payload
   }
   else if (action.type === PUT_NEW_TECHNIQUE_TO_STORE) {
      draftState.techniquesList.push(action.payload)
   }
   else if (action.type === REMOVE_OLD_TECHNIQUE_FROM_STORE) {
      draftState.techniquesList = draftState.techniquesList.filter((obj) => +obj.id !== +draftState.currentTechnique.id);
   }
}, initialState)