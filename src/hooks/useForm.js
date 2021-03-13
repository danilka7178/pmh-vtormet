import moment from "moment";
import 'moment/locale/ru'

import { useSelector, useDispatch } from "react-redux";

import {
   closeModal, setPersonnelNumber,
   setLastName, setFirstName,
   setMiddleName, setBirthdayDate,
   setDivisionPosition, setDivisionSubDivision,
   setEmploymentDate, resetFormAddWorker,
   putNewWorkerToStore, postNewWorkerToServer,
   deleteWorkerFromStore, deleteWorkerFromServer
} from "../store/workersList/actions";

const deaultObj = {
   isEdit: false,
}

function useForm({ isEdit } = deaultObj) {

   moment.locale("ru");
   const newWorkerInfo = useSelector(state => state.workersListVault.newWorkerInfo);
   const dispatch = useDispatch();

   const visibleModalAddWorker = useSelector(state => state.workersListVault.visibleModal.visibleModalAddWorker);
   const visibleModalEditWorker = useSelector(state => state.workersListVault.visibleModal.visibleModalEditWorker);
   const objectToEdit = useSelector(state => state.workersListVault.objectToEdit);

   const visibleModalDoThingsWithWorker = () => {
      if (!isEdit) {
         return visibleModalAddWorker
      } else {
         return visibleModalEditWorker
      }
   }

   const handleClose = () => {
      dispatch(resetFormAddWorker());
      dispatch(closeModal())
   }

   const changeInputValue = (e) => {
      switch (e.target.id) {
         case "personnelNumber":
            return dispatch(setPersonnelNumber(e.target.value));
         case "lastName":
            return dispatch(setLastName(e.target.value));
         case "firstName":
            return dispatch(setFirstName(e.target.value));
         case "middleName":
            return dispatch(setMiddleName(e.target.value));
         case "birthdayDate":
            return dispatch(setBirthdayDate(moment(e.target.value).format('L')));
         case "divisionPosition":
            return dispatch(setDivisionPosition(e.target.value));
         case "divisionSubDivision":
            return dispatch(setDivisionSubDivision(e.target.value));
         case "employmentDate":
            return dispatch(setEmploymentDate(moment(e.target.value).format('L')));

         default:
            break;
      }
   }

   const handleAdd = () => {
      if (!isEdit) {
         dispatch(putNewWorkerToStore(newWorkerInfo));
         dispatch(postNewWorkerToServer(newWorkerInfo));
         dispatch(closeModal("visibleModalAddWorker"));
      } else {
         const newObjectToStore = { ...objectToEdit, ...newWorkerInfo };
         console.log("objectToEdit:")
         console.log(objectToEdit)
         console.log("newWorkerInfo:")
         console.log(newWorkerInfo)
         dispatch(postNewWorkerToServer(newObjectToStore));
         dispatch(deleteWorkerFromStore(objectToEdit.id));
         dispatch(putNewWorkerToStore(newObjectToStore))
         dispatch(deleteWorkerFromServer(objectToEdit.id));
         dispatch(closeModal("visibleModalAddWorker"));
      }
   }

   const disabledButtonAddWorker = () => {
      if (!isEdit) {
         return !!newWorkerInfo &&
            newWorkerInfo.personnelNumber &&
            newWorkerInfo.lastName &&
            newWorkerInfo.firstName &&
            newWorkerInfo.middleName &&
            newWorkerInfo.birthdayDate &&
            newWorkerInfo.division &&
            newWorkerInfo.division.position &&
            newWorkerInfo.division.subDivision &&
            newWorkerInfo.employmentDate
      } else {
         return true
      }
   }

   return {
      handleClose,
      changeInputValue,
      handleAdd,
      disabledButtonAddWorker,
      visibleModalDoThingsWithWorker
   }
}

export default useForm;