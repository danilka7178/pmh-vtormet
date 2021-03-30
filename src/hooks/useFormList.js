import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../store/modals/actions";
import { getWorkersFromServer } from "../store/workersList/actions";
import { getTechniquesList } from "../store/techniquesList/actions";
import { AddAndPushList } from "../store/shifts/actions";

const deaultObj = {
   isEdit: false,
}

function useFormList({ isEdit } = deaultObj) {
   const dispatch = useDispatch();

   const currentList = useSelector(state => state.shiftsVault.currentList);
   const visibleModalAddList = useSelector(state => state.modalsVault.visibleModals.visibleModalAddList);
   const visibleModalEditList = useSelector(state => state.modalsVault.visibleModals.visibleModalEditList);
   const shift = useSelector(state => state.shiftsVault.currentShift.shift);
   const currentShift = useSelector(state => state.shiftsVault.currentShift);
   const workersList = useSelector(state => state.workersListVault.workersList);
   const techniquesList = useSelector(state => state.techniquesListVault.techniquesList)
   console.log(currentList)
   //! --currentList
   const [dateValue, setDateValue] = React.useState(new Date().toISOString().slice(0, 10));
   const [valuePlot, setValuePlot] = React.useState("");
   const [timeStart, setTimeStart] = React.useState('08:00');
   const [timeEnd, setTimeEnd] = React.useState('20:00');

   //! --driver
   const [selectedName, setSelectedName] = React.useState('');
   const [selectedUniqNumber, setSelectedUniqNumber] = React.useState('');
   const [selectedDriverLicence, setSelectedDriverLicence] = React.useState('');

   //! --car
   const [selectedCar, setSelectedCar] = React.useState('');
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

   const handleAdd = () => {
      let newList = {
         id: +shift.length + 1,
         date: dateValue,
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
            driverLicence: selectedDriverLicence,
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
      //? -- Логика отправления диспатча на изменение currentList.place
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
               setSelectedDriverLicence(obj.driverLicence)
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

   const visibleModal = () => {
      if (!isEdit) {
         return visibleModalAddList
      } else {
         return visibleModalEditList
      }
   }

   return {
      visibleModal,
      sortedWorkersList,
      sortedTechniquesList,
      handleAdd,
      handleClose,
      valuePlot,
      handleChangeRadioPlot,
      dateValue,
      handleChangeDate,
      timeStart,
      handleChangeTimeStart,
      timeEnd,
      handleChangeTimeEnd,
      selectedName,
      selectedCar,
      handleChangeSelected,
      disabledButton
   }
}

export default useFormList;