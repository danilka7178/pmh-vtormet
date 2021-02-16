import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import moment from "moment";
import 'moment/locale/ru'

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
   const visibleModalAddWorker = useSelector(state => state.workersListVault.visibleModal.visibleModalAddWorker);
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
      // dispatch(resetFormAddWorker());
      dispatch(closeModal("visibleModalAddWorker"));
   }

   const disabledButtonAddWorker = () => {
      if (
         newWorkerInfo &&
         newWorkerInfo.personnelNumber &&
         newWorkerInfo.lastName &&
         newWorkerInfo.firstName &&
         newWorkerInfo.middleName &&
         newWorkerInfo.birthdayDate &&
         newWorkerInfo.division &&
         newWorkerInfo.division.position &&
         newWorkerInfo.division.subDivision &&
         newWorkerInfo.employmentDate) {
         return true
      }
   }

   return (
      <div>
         <Dialog open={visibleModalAddWorker} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Добавить сотрудника</DialogTitle>
            <DialogContent>
               <DialogContentText>
                  Для добавления сотрудника, необходимо заполнить все поля ниже
               </DialogContentText>
               <TextField
                  autoFocus
                  margin="dense"
                  id="personnelNumber"
                  label="Табельный №"
                  type="text"
                  fullWidth
                  onChange={changeInputValue}
               />
               <TextField
                  margin="dense"
                  id="lastName"
                  label="Фамилия"
                  type="text"
                  fullWidth
                  onChange={changeInputValue}
               />
               <TextField
                  margin="dense"
                  id="firstName"
                  label="Имя"
                  type="text"
                  fullWidth
                  onChange={changeInputValue}
               />
               <TextField
                  margin="dense"
                  id="middleName"
                  label="Отчество"
                  type="text"
                  fullWidth
                  onChange={changeInputValue}
               />
               <TextField
                  InputLabelProps={{ shrink: true }}
                  margin="dense"
                  id="birthdayDate"
                  label="Дата рождения"
                  type="date"
                  fullWidth
                  onChange={changeInputValue}
               />
               <TextField
                  margin="dense"
                  id="divisionPosition"
                  label="Подразделение"
                  type="text"
                  fullWidth
                  onChange={changeInputValue}
               />
               <TextField
                  margin="dense"
                  id="divisionSubDivision"
                  label="Должность"
                  type="text"
                  fullWidth
                  onChange={changeInputValue}
               />
               <TextField
                  InputLabelProps={{ shrink: true }}
                  margin="dense"
                  id="employmentDate"
                  label="Дата приема на работу"
                  type="date"
                  fullWidth
                  onChange={changeInputValue}
               />
            </DialogContent>
            <DialogActions>
               <Button onClick={handleClose} variant="outlined" color="primary">
                  Отмена
               </Button>
               <Button
                  onClick={handleAdd}
                  variant="contained"
                  color="secondary"
                  disabled={!disabledButtonAddWorker()}
               >
                  Добавить
               </Button>
            </DialogActions>
         </Dialog>
      </div>
   );
}

export default ModalAddWorker;