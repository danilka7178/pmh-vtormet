import {
   CLICK_SORT_INCREASE,
   CLICK_SORT_REVERSE,
   CLICK_SORT_DEFAULT
} from "./actions";

const initialState = {
   buttonSortIncrease: false,
   buttonSortReverse: false,
}

export const sortReducer = (state = initialState, action) => {
   switch (action.type) {
      case CLICK_SORT_INCREASE:
         return ({
            ...state,
            buttonSortReverse: false,
            buttonSortIncrease: true,
         })
      case CLICK_SORT_REVERSE:
         return ({
            ...state,
            buttonSortReverse: true,
            buttonSortIncrease: false,
         })
      case CLICK_SORT_DEFAULT:
         return ({
            ...state,
            buttonSortReverse: false,
            buttonSortIncrease: false,
         })
      default: return state
   }
}