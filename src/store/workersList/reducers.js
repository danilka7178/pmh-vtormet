import {
   SET_DATA, OPEN_MODAL,
   CLOSE_MODAL, SET_PERSONNEL_NUMBER,
   SET_LAST_NAME, SET_FIRST_NAME,
   SET_MIDDLE_NAME, SET_BIRTHDAY_DATE,
   SET_DIVISION_POSITION, SET_DIVISION_SUBDIVISION,
   SET_EMPLOYMENT_DATE, RESET_FORM
} from "./actions";

const initialState = {
   visibleModal: {
      visibleModalAddWorker: false,
   }
};

export const workersListReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_DATA:
         return ({
            ...state,
            workersList: action.payload,
         })
      case OPEN_MODAL:
         return ({
            ...state,
            visibleModal: {
               ...state.visibleModal,
               [action.payload]: true,
            }
         })
      case CLOSE_MODAL:
         return ({
            ...state,
            visibleModal: {
               ...state.visibleModal,
               [action.payload]: false,
            }
         })
      case SET_PERSONNEL_NUMBER:
         return ({
            ...state,
            workerInfo: {
               ...state.workerInfo,
               personnelNumber: action.payload,
            }
         })
      case SET_LAST_NAME:
         return ({
            ...state,
            workerInfo: {
               ...state.workerInfo,
               lastName: action.payload,
            }
         })
      case SET_FIRST_NAME:
         return ({
            ...state,
            workerInfo: {
               ...state.workerInfo,
               firstName: action.payload,
            }
         })
      case SET_MIDDLE_NAME:
         return ({
            ...state,
            workerInfo: {
               ...state.workerInfo,
               middleName: action.payload,
            }
         })
      case SET_BIRTHDAY_DATE:
         return ({
            ...state,
            workerInfo: {
               ...state.workerInfo,
               birthdayDate: action.payload,
            }
         })
      case SET_DIVISION_POSITION:
         return ({
            ...state,
            workerInfo: {
               ...state.workerInfo,
               divisionPosition: action.payload,
            }
         })
      case SET_DIVISION_SUBDIVISION:
         return ({
            ...state,
            workerInfo: {
               ...state.workerInfo,
               divisionSubDivision: action.payload,
            }
         })
      case SET_EMPLOYMENT_DATE:
         return ({
            ...state,
            workerInfo: {
               ...state.workerInfo,
               employmentDate: action.payload,
            }
         })
      case RESET_FORM:
         return ({
            ...state,
            workerInfo: {}
         })
      default: return state
   }
}