import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


function FormListTechniques({ handleClose, handleConfirm,
   editTextField, currentTechnique,
   titleText, visibleEditOrAdd }) {

   return (
      <div>
         <Dialog
            open={visibleEditOrAdd ? visibleEditOrAdd : false}
            onClose={handleClose}
            aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">{titleText}</DialogTitle>
            <DialogContent>
               <DialogContentText>
                  Чтобы {titleText.toLowerCase()} технику заполните поля ниже.
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
   )
};

export default FormListTechniques