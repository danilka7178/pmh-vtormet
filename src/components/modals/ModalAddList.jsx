import React from 'react';
import useFormList from '../../hooks/useFormList';

import FormList from "../forms/FormList"

const ModalAddList = () => {
   const {
      visibleModal, sortedWorkersList, sortedTechniquesList,
      handleClose, handleAdd, handleChangeRadioPlot,
      handleChangeDate, handleChangeTimeStart,
      handleChangeTimeEnd, handleChangeSelected,
      disabledButton
   } = useFormList();

   return (
      <FormList
         visibleModal={visibleModal}
         titleForm={"Добавление"}
         handleChangeRadioPlot={handleChangeRadioPlot}
         handleChangeDate={handleChangeDate}
         handleChangeTimeStart={handleChangeTimeStart}
         handleChangeTimeEnd={handleChangeTimeEnd}
         handleChangeSelected={handleChangeSelected}
         sortedWorkersList={sortedWorkersList}
         sortedTechniquesList={sortedTechniquesList}
         handleAdd={handleAdd}
         handleClose={handleClose}
         disabledButton={disabledButton}
         buttonText={"Добавить"}
      />
   )
}

export default ModalAddList