import produce from "immer";
import {
   CLICK_SORT_INCREASE,
   CLICK_SORT_REVERSE,
   CLICK_SORT_DEFAULT
} from "./actions";

const initialState = {
   buttonSortIncrease: false,
   buttonSortReverse: false,
}

export const sortReducer = produce((draftState, action) => {
   if (action.type === CLICK_SORT_INCREASE) {
      draftState.buttonSortIncrease = true;
      draftState.buttonSortReverse = false;
   }
   if (action.type === CLICK_SORT_REVERSE) {
      draftState.buttonSortReverse = true;
      draftState.buttonSortIncrease = false;
   }
   if (action.type === CLICK_SORT_DEFAULT) {
      draftState.buttonSortReverse = false;
      draftState.buttonSortIncrease = false;
   }
}, initialState)