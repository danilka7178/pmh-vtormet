import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { useSelector } from "react-redux";

const FormListWorker = ({ disabledButtonAddWorker, handleAdd,
   changeInputValue, handleClose, titleForm, contentText,
   contentButton, visibleModalDoThingsWithWorker }) => {

   const { personnelNumber, lastName,
      firstName, middleName, birthdayDate,
      division, employmentDate } = useSelector(state => state.workersListVault.objectToEdit);

   const transformationDate = (date) => {
      if (date) {
         const someTryMassive = [];
         const newMassive = date.replace(/\./g, "-").split("");

         someTryMassive.push(newMassive[6], newMassive[7], newMassive[8],
            newMassive[9], newMassive[5],
            newMassive[3], newMassive[4], newMassive[2],
            newMassive[0], newMassive[1])

         return (
            someTryMassive.join("")
         )
      }
   }

   return (
      <div>
         <Dialog
            open={visibleModalDoThingsWithWorker}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
         >
            <DialogTitle id="form-dialog-title">
               {titleForm} сотрудника
            </DialogTitle>
            <DialogContent>
               <DialogContentText>
                  Для {contentText} сотрудника, необходимо заполнить все поля ниже
               </DialogContentText>
               <TextField
                  autoFocus
                  margin="dense"
                  id="personnelNumber"
                  label="Табельный №"
                  type="text"
                  fullWidth
                  defaultValue={personnelNumber ? personnelNumber : ""}
                  onChange={changeInputValue}
               />
               <TextField
                  margin="dense"
                  id="lastName"
                  label="Фамилия"
                  type="text"
                  fullWidth
                  defaultValue={lastName ? lastName : ""}
                  onChange={changeInputValue}
               />
               <TextField
                  margin="dense"
                  id="firstName"
                  label="Имя"
                  type="text"
                  fullWidth
                  defaultValue={firstName ? firstName : ""}
                  onChange={changeInputValue}
               />
               <TextField
                  margin="dense"
                  id="middleName"
                  label="Отчество"
                  type="text"
                  fullWidth
                  defaultValue={middleName ? middleName : ""}
                  onChange={changeInputValue}
               />
               <TextField
                  InputLabelProps={{ shrink: true }}
                  margin="dense"
                  id="birthdayDate"
                  label="Дата рождения"
                  type="date"
                  fullWidth
                  defaultValue={birthdayDate ? transformationDate(birthdayDate) : ""}
                  onChange={changeInputValue}
               />
               <TextField
                  margin="dense"
                  id="divisionPosition"
                  label="Подразделение"
                  type="text"
                  fullWidth
                  defaultValue={division ? division.position : ""}
                  onChange={changeInputValue}
               />
               <TextField
                  margin="dense"
                  id="divisionSubDivision"
                  label="Должность"
                  type="text"
                  fullWidth
                  defaultValue={division ? division.subDivision : ""}
                  onChange={changeInputValue}
               />
               <TextField
                  InputLabelProps={{ shrink: true }}
                  margin="dense"
                  id="employmentDate"
                  label="Дата приема на работу"
                  type="date"
                  fullWidth
                  defaultValue={employmentDate ? transformationDate(employmentDate) : ""}
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
                  {contentButton}
               </Button>
            </DialogActions>
         </Dialog>
      </div>
   )
}

export default FormListWorker;