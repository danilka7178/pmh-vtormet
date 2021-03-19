import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';

import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../../store/modals/actions";
// import { postAndAddShift } from "../../store/shifts/actions";

const useStyles = makeStyles((theme) => ({
   formControl: {
      minWidth: 400,
   },
}));

function ModalAddList() {
   const classes = useStyles();
   const dispatch = useDispatch();
   const visibleModalAddList = useSelector(state => state.modalsVault.visibleModals.visibleModalAddList);
   const workersList = useSelector(state => state.workersListVault.workersList)
   const sortedWorkersList = workersList.sort(function (a, b) {
      if (a.lastName > b.lastName) {
         return 1;
      }
      if (a.lastName < b.lastName) {
         return -1;
      }
      // a должно быть равным b
      return 0;
   });

   const [valuePlot, setValuePlot] = React.useState('');
   const [selectedName, setSelectedName] = React.useState('');

   const handleClose = (modal) => {
      dispatch(closeModal(modal))
   };

   const handleAdd = () => {
      dispatch(closeModal("visibleModalAddList"))
   }

   const handleChangeRadioPlot = (e) => {
      setValuePlot(e.target.value)
   }

   const handleChangeSelected = (e) => {
      setSelectedName(e.target.value)
   }

   return (
      <div>
         <Dialog
            open={visibleModalAddList ? visibleModalAddList : false}
            onClose={() => { handleClose("visibleModalAddList") }}
            aria-labelledby="form-dialog-title"
         >
            <DialogTitle id="form-dialog-title">Добавление п/л</DialogTitle>
            <DialogContent>
               <DialogContentText>
                  Для добавления п/л пожалуйста заполните необходимые поля ниже
               </DialogContentText>
               <FormControl component="fieldset" className={classes.formControl}>
                  <FormLabel component="legend">Участок</FormLabel>
                  <div>
                     <RadioGroup aria-label="Участок" name="plot" value={valuePlot} onChange={handleChangeRadioPlot}>
                        <FormControlLabel value="УПМ" control={<Radio />} label="УПМ" />
                        <FormControlLabel value="КУ" control={<Radio />} label="КУ" />
                     </RadioGroup>
                  </div>
                  <div>
                     <TextField
                        id="date"
                        label="Birthday"
                        type="date"
                        defaultValue="2021-03-19"
                        InputLabelProps={{
                           shrink: true,
                        }}
                     />
                  </div>
                  <div>
                     <TextField
                        id="timeStart"
                        label="Время начала"
                        type="time"
                        defaultValue="08:00"
                        InputLabelProps={{
                           shrink: true,
                        }}
                        inputProps={{
                           step: 600, // 5 min
                        }}
                     />
                  </div>
                  <div>
                     <TextField
                        id="timeEnd"
                        label="Время окончания"
                        type="time"
                        defaultValue="20:00"
                        InputLabelProps={{
                           shrink: true,
                        }}
                        inputProps={{
                           step: 600, // 5 min
                        }}
                     />
                  </div>
               </FormControl>
               <div>
                  <FormControl className={classes.formControl}>
                     <InputLabel id="selectedNameLabel">ФИО</InputLabel>
                     <Select
                        labelId="selectedNameLabel"
                        id="selectedName"
                        value={selectedName}
                        onChange={handleChangeSelected}
                     >
                        {sortedWorkersList.map(obj => {
                           return (
                              <MenuItem
                                 key={obj.id}
                                 value={obj.lastName + " " + obj.firstName + " " + obj.middleName}>
                                 {obj.lastName + " " + obj.firstName + " " + obj.middleName}
                              </MenuItem>
                           )
                        })}
                     </Select>
                  </FormControl>
               </div>
            </DialogContent>
            <DialogActions>
               <Button onClick={handleClose} color="primary">
                  Отменить
               </Button>
               <Button onClick={handleAdd} color="secondary" variant="contained">
                  Добавить
               </Button>
            </DialogActions>
         </Dialog>
      </div>
   );
}

export default ModalAddList;