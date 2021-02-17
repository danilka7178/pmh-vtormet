import React from 'react';

import moment from "moment";
import 'moment/locale/ru'
import FormListWorker from "../forms/FormListWorkers"

import { useSelector, useDispatch } from "react-redux";

import {
   closeModal, setPersonnelNumber,
   setLastName, setFirstName,
   setMiddleName, setBirthdayDate,
   setDivisionPosition, setDivisionSubDivision,
   setEmploymentDate, resetFormAddWorker,
   putNewWorkerToStore, postNewWorkerToServer
} from "../../store/workersList/actions";

const ModalAddWorker = () => {
   moment.locale("ru");
   const newWorkerInfo = useSelector(state => state.workersListVault.newWorkerInfo);
   const dispatch = useDispatch();

   const handleClose = () => {
      dispatch(resetFormAddWorker());
      dispatch(closeModal("visibleModalAddWorker"))
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
      dispatch(putNewWorkerToStore(newWorkerInfo));
      dispatch(postNewWorkerToServer(newWorkerInfo));
      dispatch(closeModal("visibleModalAddWorker"));
   }

   const disabledButtonAddWorker = () => {
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
   }

   return (
      <FormListWorker
         disabledButtonAddWorker={disabledButtonAddWorker}
         handleAdd={handleAdd}
         changeInputValue={changeInputValue}
         handleClose={handleClose}
      />
   );
}

export default ModalAddWorker;