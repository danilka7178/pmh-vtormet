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
import { getWorkersFromServer } from "../../store/workersList/actions";
import { getTechniquesList } from "../../store/techniquesList/actions";
import { AddAndPushList } from "../../store/shifts/actions";

const useStyles = makeStyles((theme) => ({
   formControl: {
      minWidth: 400,
   },
   formLabelPlot: {
      fontSize: 14,
   }
}));

function ModalAddList() {
   const classes = useStyles();
   const dispatch = useDispatch();
   const visibleModalAddList = useSelector(state => state.modalsVault.visibleModals.visibleModalAddList);
   const shift = useSelector(state => state.shiftsVault.currentShift.shift);
   const currentShift = useSelector(state => state.shiftsVault.currentShift);
   const workersList = useSelector(state => state.workersListVault.workersList);
   const techniquesList = useSelector(state => state.techniquesListVault.techniquesList)

   const [valuePlot, setValuePlot] = React.useState('');
   const [dateValue, setDateValue] = React.useState(new Date().toISOString().slice(0, 10));
   const [timeStart, setTimeStart] = React.useState('08:00');
   const [timeEnd, setTimeEnd] = React.useState('20:00');
   const [selectedName, setSelectedName] = React.useState('');
   const [selectedCar, setSelectedCar] = React.useState('');

   const [selectedUniqNumber, setSelectedUniqNumber] = React.useState('');
   const [selectedCarUniqNumber, setSelectedCarUniqNumber] = React.useState('');

   React.useEffect(() => {
      dispatch(getWorkersFromServer())
      dispatch(getTechniquesList())
      // eslint-disable-next-line
   }, [])

   const sortedWorkersList = workersList ? (workersList.slice().sort(function (a, b) {
      if (a.lastName > b.lastName) {
         return 1;
      }
      if (a.lastName < b.lastName) {
         return -1;
      }
      return 0;
   })) : []

   const sortedTechniquesList = techniquesList ? (techniquesList.slice().sort(function (a, b) {
      if (a.brand > b.brand) {
         return 1;
      }
      if (a.brand < b.brand) {
         return -1;
      }
      if (a.stateNumber > b.stateNumber) {
         return 1;
      }
      if (a.stateNumber < b.stateNumber) {
         return -1;
      }
      return 0;
   })) : []

   const handleClose = (modal) => {
      dispatch(closeModal(modal))
      setValuePlot("")
      setDateValue(new Date().toISOString().slice(0, 10))
      setTimeStart("08:00")
      setTimeEnd("20:00")
      setSelectedName("")
      setSelectedCar("")
   };

   console.log(currentShift)

   const handleAdd = () => {
      let newList = {
         id: shift.length + 1,
         place: valuePlot,
         timeStart: timeStart.replace(":", "."),
         timeEnd: timeEnd.replace(":", "."),
         car: {
            name: selectedCar.split(" ")[0],
            carUniqNumber: selectedCarUniqNumber,
            stateNumber: selectedCar.split(" ")[1],
         },
         driver: {
            name: selectedName,
            uniqNumber: selectedUniqNumber,
            driverLicence: "driverLicence",
         }
      };
      let newShift = {
         id: currentShift.id,
         shiftName: currentShift.shiftName,
         shift: [...currentShift.shift, newList]
      }
      dispatch(AddAndPushList(newList, newShift))
      handleClose("visibleModalAddList")
   }

   const handleChangeRadioPlot = (e) => {
      setValuePlot(e.target.value)
   }

   const handleChangeDate = (e) => {
      setDateValue(e.target.value)
   }

   const handleChangeTimeStart = (e) => {
      setTimeStart(e.target.value)
   }

   const handleChangeTimeEnd = (e) => {
      setTimeEnd(e.target.value)
   }

   const handleChangeSelected = (select, e) => {
      if (select === "name") {
         setSelectedName(e.target.value)
         workersList.forEach((obj) => {
            let objName = obj.lastName + " " + obj.firstName + " " + obj.middleName;
            if (objName === e.target.value) {
               setSelectedUniqNumber(obj.personnelNumber)
            }
         })
      } else if (select === "car") {
         setSelectedCar(e.target.value)
         techniquesList.forEach((obj) => {
            let objName = obj.brand + " " + obj.stateNumber;
            if (objName === e.target.value) {
               setSelectedCarUniqNumber(obj.inventoryNumber)
            }
         })
      }
   }

   const disabledButton = () => {
      if (valuePlot &&
         dateValue &&
         timeStart &&
         timeEnd &&
         selectedName &&
         selectedCar) {
         return false
      } else return true
   }

   return (
      <div className="add-list">
         <Dialog
            className="add-list__modal"
            open={visibleModalAddList ? visibleModalAddList : false}
            onClose={() => { handleClose("visibleModalAddList") }}
            aria-labelledby="form-dialog-title"
         >
            <DialogTitle
               className="add-list__title"
               id="form-dialog-title"
            >
               Добавление п/л
               </DialogTitle>
            <DialogContent className="add-list__content">
               <DialogContentText className="add-list__content-description">
                  Для добавления п/л пожалуйста заполните необходимые поля ниже
               </DialogContentText>
               <FormControl component="fieldset" className={classes.formControl}>
                  <FormLabel component="legend" className={classes.formLabelPlot}>Участок</FormLabel>
                  <div className="add-list__block">
                     <RadioGroup aria-label="Участок" name="plot" value={valuePlot} onChange={handleChangeRadioPlot}>
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
                        value={dateValue}
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
                           step: 600, // 5 min
                        }}
                        value={timeStart}
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
                           step: 600, // 5 min
                        }}
                        value={timeEnd}
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
                        value={selectedName}
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
                        value={selectedCar}
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
                  Добавить
               </Button>
            </DialogActions>
         </Dialog>
      </div>
   );
}

export default ModalAddList;