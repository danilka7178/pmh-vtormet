import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


import { useSelector } from "react-redux";

const FormListWorker = ({ disabledButtonAddWorker, handleAdd,
   changeInputValue, handleClose, titleForm, contentText, contentButton }) => {


   const visibleModalAddWorker = useSelector(state => state.workersListVault.visibleModal.visibleModalAddWorker);
   return (
      <div>
         <Dialog
            open={visibleModalAddWorker}
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
                  {contentButton}
               </Button>
            </DialogActions>
         </Dialog>
      </div>
   )
}

export default FormListWorker;