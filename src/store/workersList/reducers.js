import {
   SET_DATA, OPEN_MODAL,
   CLOSE_MODAL, SET_PERSONNEL_NUMBER,
   SET_LAST_NAME, SET_FIRST_NAME,
   SET_MIDDLE_NAME, SET_BIRTHDAY_DATE,
   SET_DIVISION_POSITION, SET_DIVISION_SUBDIVISION,
   SET_EMPLOYMENT_DATE, RESET_FORM,
   NEW_WORKER_TO_STORE, DELETE_WORKER_FROM_STORE,
   PUT_OBJECT_IN_FORM
} from "./actions";

const initialState = {
   visibleModal: {
      visibleModalAddWorker: false,
      visibleModalEditWorker: false,
   },
   objectToEdit: {

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
               visibleModalAddWorker: false,
               visibleModalEditWorker: false,
            },
            objectToEdit: {},
         })
      case SET_PERSONNEL_NUMBER:
         return ({
            ...state,
            newWorkerInfo: {
               ...state.newWorkerInfo,
               personnelNumber: action.payload,
               id: (+state.workersList[state.workersList.length - 1].id + 1).toString()
            }
         })
      case SET_LAST_NAME:
         return ({
            ...state,
            newWorkerInfo: {
               ...state.newWorkerInfo,
               lastName: action.payload,
            }
         })
      case SET_FIRST_NAME:
         return ({
            ...state,
            newWorkerInfo: {
               ...state.newWorkerInfo,
               firstName: action.payload,
            }
         })
      case SET_MIDDLE_NAME:
         return ({
            ...state,
            newWorkerInfo: {
               ...state.newWorkerInfo,
               middleName: action.payload,
            }
         })
      case SET_BIRTHDAY_DATE:
         return ({
            ...state,
            newWorkerInfo: {
               ...state.newWorkerInfo,
               birthdayDate: action.payload,
            }
         })
      case SET_DIVISION_POSITION:
         return ({
            ...state,
            newWorkerInfo: {
               ...state.newWorkerInfo,
               division: {
                  ...state.newWorkerInfo.division,
                  position: action.payload,
               }
            }
         })
      case SET_DIVISION_SUBDIVISION:
         return ({
            ...state,
            newWorkerInfo: {
               ...state.newWorkerInfo,
               division: {
                  ...state.newWorkerInfo.division,
                  subDivision: action.payload,
               }
            }
         })
      case SET_EMPLOYMENT_DATE:
         return ({
            ...state,
            newWorkerInfo: {
               ...state.newWorkerInfo,
               employmentDate: action.payload,
            }
         })
      case RESET_FORM:
         return ({
            ...state,
            newWorkerInfo: {}
         })
      case NEW_WORKER_TO_STORE:
         return ({
            ...state,
            workersList: [
               ...state.workersList,
               action.payload
            ],
            objectToEdit: {},
            newWorkerInfo: {},
         })
      case DELETE_WORKER_FROM_STORE:
         return ({
            ...state,
            workersList: state.workersList
               .filter((obj) => +obj.id !== +action.payload),
         })
      case PUT_OBJECT_IN_FORM:
         return ({
            ...state,
            objectToEdit: action.payload
         })
      default: return state
   }
}