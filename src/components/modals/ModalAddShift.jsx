import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../../store/modals/actions";
import { postAndAddShift } from "../../store/shifts/actions";

function ModalAddShift() {
   const [inputValue, setInputValue] = React.useState("");
   const dispatch = useDispatch();
   const visibleModalAddShift = useSelector(state => state.modalsVault.visibleModals.visibleModalAddShift)
   const shifts = useSelector(state => state.shiftsVault.shiftsList);

   const handleClose = (modal) => {
      dispatch(closeModal(modal))
   };

   const handleChange = (e) => {
      setInputValue(e.target.value)
   }

   const keyUp = (e) => {
      if (e.code === "Enter") {
         handleAdd()
      }
   }

   const handleAdd = () => {
      const newShift = {
         id: shifts.length ? +shifts[shifts.length - 1].id + 1 : 1,
         shiftName: inputValue,
         shift: []
      }
      dispatch(postAndAddShift(newShift))
      dispatch(closeModal("visibleModalAddShift"))
      setInputValue("")
   }

   const buttonDisabled = () => {
      let disabledSameValue = false
      shifts.forEach((obj) => {
         if (obj.shiftName === inputValue) {
            return disabledSameValue = true
         } else return false
      })

      if (!inputValue === "" || !disabledSameValue) {
         return false
      } else return true
   }

   return (
      <div>
         <Dialog
            open={visibleModalAddShift ? visibleModalAddShift : false}
            onClose={() => { handleClose("visibleModalAddShift") }}
            aria-labelledby="form-dialog-title"
         >
            <DialogTitle id="form-dialog-title">Добавление смены</DialogTitle>
            <DialogContent>
               <DialogContentText>
                  Для добавления смены пожалуйста просто впишите желаемое имя смены
               </DialogContentText>
               <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Название смены"
                  type="text"
                  value={inputValue}
                  onChange={handleChange}
                  onKeyUp={keyUp}
                  fullWidth
               />
            </DialogContent>
            <DialogActions>
               <Button onClick={handleClose} color="primary">
                  Отменить
               </Button>
               <Button disabled={buttonDisabled()} onClick={handleAdd} color="secondary" variant="contained">
                  Добавить
               </Button>
            </DialogActions>
         </Dialog>
      </div>
   );
}

export default ModalAddShift;