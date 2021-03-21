import React from 'react';
import useFormList from '../../hooks/useFormList';

import FormList from "../forms/FormList"

const ModalAddListNew = () => {
   const {
      visibleModal, sortedWorkersList, sortedTechniquesList,
      handleClose, handleAdd, valuePlot, handleChangeRadioPlot,
      dateValue, handleChangeDate, timeStart, handleChangeTimeStart,
      timeEnd, handleChangeTimeEnd, selectedName, selectedCar,
      handleChangeSelected, disabledButton
   } = useFormList();

   return (
      <FormList
         visibleModal={visibleModal}
         titleForm={"Добавление"}
         valuePlot={valuePlot}
         handleChangeRadioPlot={handleChangeRadioPlot}
         dateValue={dateValue}
         handleChangeDate={handleChangeDate}
         timeStart={timeStart}
         handleChangeTimeStart={handleChangeTimeStart}
         timeEnd={timeEnd}
         handleChangeTimeEnd={handleChangeTimeEnd}
         selectedName={selectedName}
         handleChangeSelected={handleChangeSelected}
         sortedWorkersList={sortedWorkersList}
         selectedCar={selectedCar}
         sortedTechniquesList={sortedTechniquesList}
         handleAdd={handleAdd}
         handleClose={handleClose}
         disabledButton={disabledButton}
         buttonText={"Добавить"}
      />
   )
}

export default ModalAddListNew