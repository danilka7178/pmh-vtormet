import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../store/modals/actions";
import { getWorkersFromServer } from "../store/workersList/actions";
import { getTechniquesList } from "../store/techniquesList/actions";
import {
   AddAndPushList, setPlot, setDate,
   setTimeStart, setTimeEnd, setDriverName,
   setDriverUniqNumb, setDriverLicense,
   setCarName, setCarUniqNumb, setCarStateNumb,
   deleteList
} from "../store/shifts/actions";
import { v4 as uuidv4 } from 'uuid';

const deaultObj = {
   isEdit: false,
}

function useFormList({ isEdit } = deaultObj) {
   const dispatch = useDispatch();
   const currentList = useSelector(state => state.shiftsVault.currentList);
   const visibleModalAddList = useSelector(state => state.modalsVault.visibleModals.visibleModalAddList);
   const visibleModalEditList = useSelector(state => state.modalsVault.visibleModals.visibleModalEditList);
   const currentShift = useSelector(state => state.shiftsVault.currentShift);
   const workersList = useSelector(state => state.workersListVault.workersList);
   const techniquesList = useSelector(state => state.techniquesListVault.techniquesList);
   const shifts = useSelector(state => state.shiftsVault.shiftsList);

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
      dispatch(setPlot(""))
      dispatch(setDate(new Date().toISOString().slice(0, 10)))
      dispatch(setTimeStart("08:00"))
      dispatch(setTimeEnd("20:00"))
      dispatch(setDriverName(""))
      dispatch(setCarName(""))
   };

   const handleAdd = (e) => {
      const newList = {
         id: uuidv4().slice(0, 8),
         date: currentList ? currentList.date : new Date().toISOString().slice(0, 10),
         place: currentList ? currentList.place : "",
         timeStart: currentList ? currentList.timeStart.replace(":", ".") : "08.00",
         timeEnd: currentList ? currentList.timeEnd.replace(":", ".") : "20.00",
         car: {
            name: currentList ? currentList.car.name : "",
            carUniqNumber: currentList ? currentList.car.uniqNumber : "",
            stateNumber: currentList ? currentList.car.stateNumber : "",
         },
         driver: {
            name: currentList ? currentList.driver.name : "",
            uniqNumber: currentList ? currentList.driver.uniqNumber : "",
            driverLicence: currentList ? currentList.driver.licence : "",
         }
      };

      const newShift = {
         id: uuidv4().slice(0, 8),
         shiftName: currentShift.shiftName,
         shift: [...currentShift.shift, newList]
      }

      const findIdShift = shifts.find(obj => obj.shiftName === currentShift.shiftName);
      if (isEdit) {
         console.log(findIdShift.id)
         console.log(newList)
         console.log(newShift)
         dispatch(deleteList(currentList.id))
         dispatch(AddAndPushList(findIdShift.id, newList, newShift))
      } else {
         console.log(findIdShift)
         console.log(newList)
         console.log(newShift)
         dispatch(AddAndPushList(findIdShift, newList, newShift))
      }

      handleClose("visibleModalAddList")
   }

   const handleChangeRadioPlot = (e) => {
      dispatch(setPlot(e.target.value))
   }

   const handleChangeDate = (e) => {
      dispatch(setDate(e.target.value))
   }

   const handleChangeTimeStart = (e) => {
      dispatch(setTimeStart(e.target.value))
   }

   const handleChangeTimeEnd = (e) => {
      dispatch(setTimeEnd(e.target.value))
   }

   const handleChangeSelected = (select, e) => {
      if (select === "name") {
         dispatch(setDriverName(e.target.value))
         workersList.forEach((obj) => {
            let objName = obj.lastName + " " + obj.firstName + " " + obj.middleName;
            if (objName === e.target.value) {
               dispatch(setDriverUniqNumb(obj.personnelNumber))
               dispatch(setDriverLicense(obj.driverLicence))
            }
         })
      } else if (select === "car") {
         dispatch(setCarName(e.target.value))
         techniquesList.forEach((obj) => {
            let objName = obj.brand + " " + obj.stateNumber;
            if (objName === e.target.value) {
               dispatch(setCarUniqNumb(obj.inventoryNumber))
               dispatch(setCarStateNumb(obj.stateNumber))
            }
         })
      }
   }

   const disabledButton = () => {
      if (currentList &&
         currentList.date &&
         currentList.place &&
         currentList.timeStart &&
         currentList.timeEnd &&
         currentList.driver.name &&
         currentList.car.name) {
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
      handleChangeRadioPlot,
      handleChangeDate,
      handleChangeTimeStart,
      handleChangeTimeEnd,
      handleChangeSelected,
      disabledButton
   }
}

export default useFormList;