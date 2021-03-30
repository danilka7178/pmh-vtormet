import React from 'react';
import useFormList from '../../hooks/useFormList';
import FormList from "../forms/FormList";
import { useSelector } from "react-redux";


const ModalEditList = () => {
   const currentList = useSelector(state => state.shiftsVault.currentList);
   const {
      visibleModal, sortedWorkersList, sortedTechniquesList,
      handleClose, handleAdd, handleChangeRadioPlot,
      handleChangeDate, handleChangeTimeStart,
      handleChangeTimeEnd, handleChangeSelected,
      disabledButton
   } = useFormList({ isEdit: true });

   return (
      <FormList
         visibleModal={visibleModal}
         titleForm={"Редактирование"}
         valuePlot={currentList.place}
         handleChangeRadioPlot={handleChangeRadioPlot}
         dateValue={currentList.date}
         handleChangeDate={handleChangeDate}
         timeStart={currentList.timeStart}
         handleChangeTimeStart={handleChangeTimeStart}
         timeEnd={currentList.timeEnd}
         handleChangeTimeEnd={handleChangeTimeEnd}
         selectedName={currentList.driver.name}
         handleChangeSelected={handleChangeSelected}
         sortedWorkersList={sortedWorkersList}
         selectedCar={currentList.car.name + currentList.car.stateNumber}
         sortedTechniquesList={sortedTechniquesList}
         handleAdd={handleAdd}
         handleClose={handleClose}
         disabledButton={disabledButton}
         buttonText={"Редактировать"}
      />
   )
}

export default ModalEditList