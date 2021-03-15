import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import {
   changeVisibleModal, setCurrentTechnique,
   setStateNumberCurrentTechnique,
   setBrandCurrentTechnique,
   setInventoryNumberCurrentTechnique,
   setFuelCurrentTechnique,
   changeTechniqueInfo
} from "../../store/techniquesList/actions";
import { useSelector, useDispatch } from "react-redux";

function ModalTechniquesEdit() {

   const dispatch = useDispatch();

   const currentTechnique = useSelector(state => state.techniquesListVault.currentTechnique);
   const visibleModalEdit = useSelector(state => state.techniquesListVault.visibleModals.editing);

   const handleClose = () => {
      dispatch(changeVisibleModal("editing"))
   };

   const handleConfirm = () => {
      dispatch(changeVisibleModal("editing"))
      dispatch(changeTechniqueInfo(currentTechnique))
      // dispatch(setCurrentTechnique({}))
   };

   const editTextField = (e) => {
      switch (e.target.id) {
         case "stateNumber":
            return dispatch(setStateNumberCurrentTechnique(e.target.value))
         case "brand":
            return dispatch(setBrandCurrentTechnique(e.target.value))
         case "inventoryNumber":
            return dispatch(setInventoryNumberCurrentTechnique(e.target.value))
         case "fuel":
            return dispatch(setFuelCurrentTechnique(e.target.value))
         default:
            break;
      }
   };

   return (
      <div>
         <Dialog
            open={visibleModalEdit ? visibleModalEdit : false}
            onClose={handleClose}
            aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Редактирование</DialogTitle>
            <DialogContent>
               <DialogContentText>
                  Для редактирования выбранной техники заполните поля ниже.
               </DialogContentText>
               <TextField
                  autoFocus
                  margin="dense"
                  id="stateNumber"
                  label="Гос. номер"
                  value={currentTechnique ? currentTechnique.stateNumber : ""}
                  type="text"
                  variant="outlined"
                  fullWidth
                  onChange={editTextField}
               />
               <TextField
                  margin="dense"
                  id="brand"
                  label="Марка"
                  value={currentTechnique ? currentTechnique.brand : ""}
                  type="text"
                  variant="outlined"
                  fullWidth
                  onChange={editTextField}
               />
               <TextField
                  margin="dense"
                  id="inventoryNumber"
                  label="Инвентарный номер"
                  value={currentTechnique ? currentTechnique.inventoryNumber : ""}
                  type="number"
                  variant="outlined"
                  fullWidth
                  onChange={editTextField}
               />
               <TextField
                  margin="dense"
                  id="fuel"
                  label="Вид топлива"
                  value={currentTechnique ? currentTechnique.fuel : ""}
                  type="text"
                  variant="outlined"
                  fullWidth
                  onChange={editTextField}
               />
            </DialogContent>
            <DialogActions>
               <Button onClick={handleClose} color="primary" variant="text">
                  Отменить
               </Button>
               <Button onClick={handleConfirm} color="secondary" variant="contained">
                  Подтвердить
               </Button>
            </DialogActions>
         </Dialog>
      </div>
   );
}

export default ModalTechniquesEdit;