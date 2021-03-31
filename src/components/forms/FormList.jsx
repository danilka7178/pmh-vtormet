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
import { useSelector } from "react-redux"

const useStyles = makeStyles((theme) => ({
   formControl: {
      minWidth: 400,
   },
   formLabelPlot: {
      fontSize: 14,
   }
}));

const FormList = ({ visibleModal, titleForm,
   handleChangeRadioPlot, handleChangeDate,
   handleChangeTimeStart, handleChangeTimeEnd,
   handleChangeSelected, sortedWorkersList,
   sortedTechniquesList, handleAdd, handleClose,
   disabledButton, buttonText }) => {

   const currentList = useSelector(state => state.shiftsVault.currentList);
   const classes = useStyles();

   const transformationTime = (time) => {
      if (time) {
         const newTime = time.replace(/\./g, ":").split("");
         return (
            newTime.join("")
         )
      }
   }

   return (
      <div className="add-list">
         <Dialog
            className="add-list__modal"
            open={visibleModal() ? visibleModal() : false}
            onClose={() => { handleClose("visibleModalAddList") }}
            aria-labelledby="form-dialog-title"
         >
            <DialogTitle
               className="add-list__title"
               id="form-dialog-title"
            >
               {titleForm} п/л
            </DialogTitle>
            <DialogContent className="add-list__content">
               <DialogContentText className="add-list__content-description">
                  Чтобы выполнить {titleForm.toLowerCase()} п/л пожалуйста заполните необходимые поля ниже
            </DialogContentText>
               <FormControl component="fieldset" className={classes.formControl}>
                  <FormLabel component="legend" className={classes.formLabelPlot}>Участок</FormLabel>
                  <div className="add-list__block">
                     <RadioGroup aria-label="Участок" name="plot" value={currentList.place} onChange={handleChangeRadioPlot}>
                        <FormControlLabel value="УПМ" control={<Radio />} label="УПМ" />
                        <FormControlLabel value="КУ" control={<Radio />} label="КУ" />
                     </RadioGroup>
                  </div>
                  <div className="add-list__block">
                     <TextField
                        id="date"
                        label="Дата п/л"
                        type="date"
                        InputLabelProps={{
                           shrink: true,
                        }}
                        value={currentList.date}
                        onChange={handleChangeDate}
                     />
                  </div>
                  <div className="add-list__block">
                     <TextField
                        id="timeStart"
                        label="Начало"
                        type="time"
                        InputLabelProps={{
                           shrink: true,
                        }}
                        inputProps={{
                           step: 600,
                        }}
                        value={transformationTime(currentList.timeStart)}
                        onChange={handleChangeTimeStart}
                     />
                  </div>
                  <div className="add-list__block">
                     <TextField
                        id="timeEnd"
                        label="Окончание"
                        type="time"
                        InputLabelProps={{
                           shrink: true,
                        }}
                        inputProps={{
                           step: 600,
                        }}
                        value={transformationTime(currentList.timeEnd)}
                        onChange={handleChangeTimeEnd}
                     />
                  </div>
               </FormControl>
               <div className="add-list__block-name">
                  <FormControl className={classes.formControl}>
                     <InputLabel id="selectedNameLabel">ФИО</InputLabel>
                     <Select
                        labelId="selectedNameLabel"
                        id="selectedName"
                        value={currentList.driver.name}
                        onChange={(e) => handleChangeSelected("name", e)}
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
               <div className="add-list__block-car">
                  <FormControl className={classes.formControl}>
                     <InputLabel id="selectedCarLabel">Авто</InputLabel>
                     <Select
                        labelId="selectedCarLabel"
                        id="selectedCar"
                        value={currentList.car.name}
                        onChange={(e) => handleChangeSelected("car", e)}
                     >
                        {sortedTechniquesList.map(obj => {
                           return (
                              <MenuItem
                                 key={obj.id}
                                 value={obj.brand + " " + obj.stateNumber}>
                                 {obj.brand + " " + obj.stateNumber}
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
               <Button
                  onClick={handleAdd}
                  color="secondary"
                  variant="contained"
                  disabled={disabledButton()}
               >
                  {buttonText}
               </Button>
            </DialogActions>
         </Dialog>
      </div>
   )
}

export default FormList;